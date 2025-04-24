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

    // Fetch questions, their answer types, and related answers
    const { data: questions, error } = await supabase
      .from('Questions')
      .select(`
        *,
        AnswerTypes(name),
        Answers(*) 
      `)
      .eq('survey_id', Number(id)) 

    if (error) {
      console.error('Supabase error fetching questions:', error)
      return NextResponse.json(
        { error: error.message || 'Failed to fetch questions' },
        { status: 500 }
      )
    }

    if (!questions || questions.length === 0) {
      // Return empty array if no questions found, which is standard for collections
      return NextResponse.json({ questions: [] }) 
    }

    // Format the questions to include AnswerType name and the Answers array
    const formattedQuestions = questions.map(q => ({
      question: q.question, // Assuming 'question' is the field name for the question text
      answer_type: q.AnswerTypes?.name, // Flatten the answer type name
      answers: q.Answers // Include the fetched answers array
    }));

    return NextResponse.json({ questions: formattedQuestions })
  } catch (error) {
    console.error('Error fetching questions for survey ID:', id, error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}