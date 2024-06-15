import { NextResponse } from 'next/server'
import {
	addFavorite,
	removeFavorite,
	fetchFavorites,
} from '@/app/utils/supabase/favorites'

export async function POST(request: Request) {
	const { id, isFavorite } = await request.json()

	if (isFavorite) {
		await removeFavorite(id)
	} else {
		await addFavorite(id)
	}

	const updatedFavorites = await fetchFavorites()
	return NextResponse.json(updatedFavorites)
}
