import { NextResponse } from 'next/server'
import { createClient } from '@/app/utils/supabase/server'
import {
	addFavorite,
	removeFavorite,
	fetchFavorites,
} from '@/app/utils/supabase/favorites'

export async function POST(request: Request) {
	const { id, isFavorite } = await request.json()
	const supabase = createClient()

	const {
		data: { user },
		error: userError,
	} = await supabase.auth.getUser()

	if (userError) {
		return NextResponse.json({ error: userError.message }, { status: 500 })
	}

	const userId = user?.id

	if (!userId) {
		return NextResponse.json({ error: 'User ID not found' }, { status: 500 })
	}

	if (isFavorite) {
		await removeFavorite(id)
	} else {
		await addFavorite(id)
	}

	const updatedFavorites = await fetchFavorites(userId)
	return NextResponse.json(updatedFavorites)
}
