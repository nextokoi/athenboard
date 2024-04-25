import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL as string,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
)

interface Filters {
	filters: {
		date: string[]
		minPrice: string[]
		maxPrice: string[]
		activityTypes: string[]
		languages: string[]
		mobility: string[]
		communication: string[]
		sensoryNeeds: string[]
		personalAssistants: string[]
	}
}

export async function fetchDataFromSupabase() {
	try {
		const { data, error } = await supabase.from('experiences').select()
		if (error) {
			throw error
		}
		return data
	} catch (error) {
		console.error('Error retrieving data from Supabase: ', error.message)
	}
}

export async function fetchImageUrl(experienceId: string) {
	try {
		const { data, error } = await supabase
			.from('images')
			.select('url')
			.eq('experience_id', experienceId)

		if (error) {
			throw error
		}

		if (!data) {
			return []
		}

		const urls: string[] = data.map((image) => image.url)

		return urls
	} catch (error) {
		console.error('Error retrieving the image URL: ', error.message)
		throw error
	}
}

export async function fetchOneExperience(id: string) {
	try {
		const { data, error } = await supabase
			.from('experiences')
			.select()
			.eq('id', id)
			.single()

		if (error) {
			throw error
		}
		return data
	} catch (error) {
		console.error('Error fetching an experience', error.message)
		throw error
	}
}

export async function fetchOneArtist(id: string) {
	try {
		const { data, error } = await supabase
			.from('artists')
			.select()
			.eq('id', id)
			.single()
		if (error) {
			throw error
		}
		return data
	} catch (error) {
		console.error('Error fetching an artist', error.message)
		throw error
	}
}

export async function fetchFilteredExperiences({ filters }: Filters) {
	const { data, error } = await supabase
		.from('experiences')
		.select()
		.eq('date', filters.date)
		.gte('price', filters.minPrice)
		.lte('price', filters.maxPrice)
		.in('activity_type', filters.activityTypes)
		.contains('available_languages', filters.languages)
		.contains('mobility_features', filters.mobility)
		.contains('communication_features', filters.communication)
		.contains('sensory_needs', filters.sensoryNeeds)
		.contains('personal_assistants_features', filters.personalAssistants)

	if (error) {
		console.error('Error fetching filtered experiences')
		return null
	}

	return data
}
