// utils/supabase/favorites.ts
import { createClient } from '@/app/utils/supabase/server'

export const fetchFavorites = async (): Promise<string[]> => {
	const supabase = createClient()
	const { data, error } = await supabase
		.from('favorites')
		.select('experience_id')
	if (error) throw error
	return data.map((item: { experience_id: string }) => item.experience_id)
}

export const addFavorite = async (id: string): Promise<void> => {
	const supabase = createClient()
	const { data: userData, error: userError } = await supabase.auth.getUser()
	if (userError) throw userError

	const userId = userData.user?.id
	if (!userId) throw new Error('User ID not found')

	const { error } = await supabase
		.from('favorites')
		.insert([{ user_id: userId, experience_id: id }])
	if (error) throw error
}

export const removeFavorite = async (id: string): Promise<void> => {
	const supabase = createClient()
	const { error } = await supabase
		.from('favorites')
		.delete()
		.eq('experience_id', id)
	if (error) throw error
}
