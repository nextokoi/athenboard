import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL as string,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
)

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

interface User {
	id: string
	name: string
	avatar_url: string
}

interface Review {
	id: string
	score: number
	content: string
	created_at: string
	user: User
}

export async function fetchReviews(experienceId: string) {
	try {
		const { data: reviewsData, error: reviewsError } = await supabase
			.from('reviews')
			.select()
			.eq('experiences_id', experienceId)

		if (reviewsError) {
			console.error('Error fetching reviews', reviewsError.message)
			return []
		}

		if (!reviewsData || reviewsData.length === 0) {
			return []
		}

		const userIds = reviewsData.map((review) => review.user_id)

		if (!userIds || userIds.length === 0) {
			return reviewsData
		}

		const { data: usersData, error: usersError } = await supabase
			.from('users')
			.select()
			.eq('id', userIds)

		if (usersError) {
			console.error('Error fetching users', usersError.message)
			return []
		}

		for (const review of reviewsData) {
			const user = usersData.find((user) => user.id === review.user_id)
			review.user = user
		}

		const reviews: Review[] = reviewsData.map((review) => {
			return {
				id: review.id,
				score: review.score,
				content: review.content,
				created_at: review.created_at,
				user: review.user,
			}
		})

		return reviews
	} catch (error) {
		console.error('Error fetching reviews', error.message)
		throw error
	}
}
