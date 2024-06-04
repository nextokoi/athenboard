import { supabase } from './supabaseClient'

export async function fetchAllExperiences() {
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
			.eq('experience_id', experienceId)

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
			.in('id', userIds)

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

interface MappedSchedule {
	schedule_date_id: number
	schedule_id: number
	date_id: number
	hour: string
	date: string
}

export async function fetchScheduleDates(experienceId: string) {
	try {
		const { data: responseData, error } = await supabase
			.from('experiences_schedule_date')
			.select(`
		  schedule_date_id,
		  schedule_date (
			schedule_id,
			date_id,
			schedule (hour),
			date (date)
		  )
		`)
			.eq('experience_id', experienceId)

		if (error) throw error

		if (!responseData) return []

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const scheduleDates: MappedSchedule[] = responseData.map((item: any) => {
			const scheduleDate = item.schedule_date
			const schedule = scheduleDate.schedule
			const date = scheduleDate.date
			return {
				schedule_date_id: item.schedule_date_id,
				schedule_id: scheduleDate.schedule_id,
				date_id: scheduleDate.date_id,
				hour: schedule.hour,
				date: date.date,
			}
		})

		return scheduleDates
	} catch (error) {
		console.error('Error fetching schedule dates', error.message)
		throw error
	}
}

export async function fetchUserProfile(userId: string) {
	try {
		const { data, error } = await supabase
			.from('users')
			.select('username, avatar_url')
			.eq('id', userId)
			.single()

		if (error) {
			throw error
		}
		return data
	} catch (error) {
		console.error('Error fetching user profile', error.message)
		throw error
	}
}
