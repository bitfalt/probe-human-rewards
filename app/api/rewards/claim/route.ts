import { NextResponse } from 'next/server'
import { createClient } from '@/app/utils/supabase/server'
import { Database } from '@/app/utils/supabase/database.types'

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { username, survey_id } = await request.json()

    if (!username || !survey_id) {
      return NextResponse.json({ error: 'Username and survey_id are required' }, { status: 400 })
    }

    // 1. Fetch user_id based on username
    const { data: userData, error: userError } = await supabase
      .from('Users')
      .select('id')
      .eq('username', username)
      .single()

    if (userError || !userData) {
      console.error('Error fetching user:', userError)
      return NextResponse.json({ error: 'User not found or error fetching user' }, { status: 404 })
    }
    const user_id = userData.id

    // 2. Fetch reward amount (paid_amount) based on survey_id
    const { data: surveyData, error: surveyError } = await supabase
      .from('Surveys')
      .select('paid_amount')
      .eq('id', survey_id)
      .single()

    if (surveyError || !surveyData || surveyData.paid_amount === null) {
      console.error('Error fetching survey reward:', surveyError)
      return NextResponse.json({ error: 'Survey not found or reward amount not set' }, { status: 404 })
    }
    const reward_amount = surveyData.paid_amount

    // 3. Create entry in RedeemHistory
    const redeemData: Database['public']['Tables']['RedeemHistory']['Insert'] = {
      user_id: user_id,
      survey_id: survey_id,
      amount: reward_amount,
    }

    const { error: redeemError } = await supabase
      .from('RedeemHistory')
      .insert(redeemData)

    if (redeemError) {
      console.error('Error creating redeem history entry:', redeemError)
      return NextResponse.json(
        { error: redeemError.message || 'Failed to record reward claim' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Reward claimed successfully' }, { status: 201 })

  } catch (error) {
    console.error('Error claiming reward:', error)
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}