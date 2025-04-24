import { NextResponse } from 'next/server'
import { createClient } from '@/app/utils/supabase/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params

  if (!id) {
    return NextResponse.json({ error: 'Survey ID is required' }, { status: 400 })
  }

  try {
    const supabase = await createClient()

    // Fetch the contract address for the given survey ID
    const { data: contractData, error } = await supabase
      .from('SurveyContracts')
      .select('contract_address')
      .eq('survey_id', Number(id))
      .single()

    if (error) {
      console.error('Supabase error fetching survey contract:', error)
      return NextResponse.json(
        { error: error.message || 'Failed to fetch survey contract' },
        { status: 500 }
      )
    }

    if (!contractData || !contractData.contract_address) {
      return NextResponse.json({ error: 'Contract address not found for this survey' }, { status: 404 })
    }

    // Return the contract address
    return NextResponse.json({ contract_address: contractData.contract_address })

  } catch (error) {
    console.error('Error fetching survey contract by ID:', error)
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}