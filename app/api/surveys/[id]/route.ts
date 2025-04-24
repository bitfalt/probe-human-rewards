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

    // Fetch the survey and its related questions
    // Also fetch the related Status text
    const { data: survey, error } = await supabase
      .from('Surveys')
      .select(`
        name,
        description,
        about_info,
        expect,
        paid_amount,
        estimated_time,
        Status(text)
      `)
      .eq('id', Number(id))
      .single() // Use single() because we expect only one survey per ID

    if (error) {
      return NextResponse.json(
        { error: error.message || 'Failed to fetch survey' },
        { status: 500 }
      )
    }

    if (!survey) {
      return NextResponse.json({ error: 'Survey not found' }, { status: 404 })
    }

    // Optionally, transform the data structure if needed
    const formattedSurvey = {
      ...survey,
      status: survey.Status?.text, // Flatten the status text
      // Remove the Status object if you don't need it nested
      Status: undefined,
    };


    return NextResponse.json({ survey: formattedSurvey })
  } catch (error) {
    console.error('Error fetching survey by ID:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}