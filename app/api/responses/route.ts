import { NextResponse } from 'next/server'
import { createClient } from '@/app/utils/supabase/server'
import { Database } from '@/app/utils/supabase/database.types'

// Define the expected structure for the request body
interface ResponsePayload {
  username: string;
  question_id: number;
  answer: any; // Can be string, number, array, object depending on the question type
  language: string; // Short language code e.g., 'en', 'es'
}

// Define the structure for the data to be inserted
type UserResponseInsert = Database['public']['Tables']['UserResponses']['Insert'];

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { username, question_id, answer, language }: ResponsePayload = await request.json()

    // Validate required fields
    if (!username || !question_id || answer === undefined || !language) {
      return NextResponse.json({ error: 'Missing required fields: username, question_id, answer, language' }, { status: 400 })
    }

    // 1. Fetch user_id based on username
    const { data: userData, error: userError } = await supabase
      .from('Users')
      .select('id')
      .eq('username', username)
      .single()

    if (userError || !userData) {
      console.error('Error fetching user:', userError)
      return NextResponse.json({ error: `User not found for username: ${username}` }, { status: 404 })
    }
    const user_id = userData.id

    // 2. Fetch language_id based on the short language code
    const { data: langData, error: langError } = await supabase
      .from('Languages')
      .select('id')
      .eq('short', language)
      .single()

    if (langError || !langData) {
      console.error('Error fetching language:', langError)
      return NextResponse.json({ error: `Language not found for code: ${language}` }, { status: 404 })
    }
    const language_id = langData.id

    // 3. Prepare data for insertion into UserResponses table
    const responseData: UserResponseInsert = {
      user_id: user_id,
      question_id: question_id,
      language_id: language_id,
      answer: answer,
      // created_at is usually handled by the database default
    }

    // 4. Insert the user response
    const { error: insertError } = await supabase
      .from('UserResponses')
      .insert(responseData)

    if (insertError) {
      console.error('Error saving user response:', insertError)
      return NextResponse.json(
        { error: insertError.message || 'Failed to save user response' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Response saved successfully' }, { status: 201 })

  } catch (error) {
    console.error('Error processing response submission:', error)
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}