import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/app/utils/supabase/server'

export async function POST(request: NextRequest) {
	try {
		const supabase = createClient()

		const { id } = await request.json()

		if (!id) {
			console.error('Missing experience ID')
			return NextResponse.json(
				{ error: 'Missing experience ID' },
				{ status: 400 },
			)
		}

		const { data: userData, error: userError } = await supabase.auth.getUser()

		if (userError) {
			console.error('User error:', userError.message)
			return NextResponse.json({ error: userError.message }, { status: 401 })
		}

		const user_id = userData.user?.id

		if (!user_id) {
			console.error('Unauthorized access attempt')
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
		}

		const { data, error } = await supabase
			.from('favorites')
			.upsert(
				{ user_id, experience_id: id },
				{ onConflict: 'user_id,experience_id' },
			)

		if (error) {
			console.error('Database error:', error.message)
			throw error
		}

		return NextResponse.json({ message: 'Favorite added' }, { status: 200 })
	} catch (error) {
		console.error('Internal server error:', error.message)
		return NextResponse.json({ error: error.message }, { status: 500 })
	}
}

export async function DELETE(request: NextRequest) {
	try {
		const supabase = createClient()

		const { id } = await request.json()

		if (!id) {
			console.error('Missing experience ID')
			return NextResponse.json(
				{ error: 'Missing experience ID' },
				{ status: 400 },
			)
		}

		const { data: userData, error: userError } = await supabase.auth.getUser()

		if (userError) {
			console.error('User error:', userError.message)
			return NextResponse.json({ error: userError.message }, { status: 401 })
		}

		const user_id = userData.user?.id

		if (!user_id) {
			console.error('Unauthorized access attempt')
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
		}

		const { data, error } = await supabase
			.from('favorites')
			.delete()
			.eq('user_id', user_id)
			.eq('experience_id', id)

		if (error) {
			console.error('Database error:', error.message)
			throw error
		}

		return NextResponse.json({ message: 'Favorite removed' }, { status: 200 })
	} catch (error) {
		console.error('Internal server error:', error.message)
		return NextResponse.json({ error: error.message }, { status: 500 })
	}
}
