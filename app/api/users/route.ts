import { NextResponse } from 'next/server'
import { createClient } from '@/app/utils/supabase/server' // Assuming server client is appropriate here

export async function GET() {
  try {
    const supabase = await createClient()

    // Fetch all users. Adjust the select query as needed.
    // For example, you might want to exclude sensitive fields like password hashes.
    const { data: users, error } = await supabase
      .from('Users') 
      .select(`
        username,
        completed_surveys,
        total_earned,
        reliable_answers,
        verified
        `)

    if (error) {
      console.error('Supabase error fetching users:', error)
      return NextResponse.json(
        { error: error.message || 'Failed to fetch users' },
        { status: 500 }
      )
    }

    if (!users) {
      // Handle case where users might be null even without an error
      return NextResponse.json({ users: [] })
    }

    return NextResponse.json({ users })
  } catch (error) {
    console.error('Error fetching users:', error)
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}