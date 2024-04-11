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
		console.error('Error al obtener los datos de Supabase: ', error.message)
	}
}

export async function fetchImageUrl(experienceId: string) {
	try {
		const { data, error } = await supabase
			.from('images')
			.select('url')
			.eq('experience_id', experienceId)
			.single()

		if (error) {
			throw error
		}

		if (!data) {
			return null
		}
		return data.url
	} catch (error) {
		console.error('Error al obtener la URL de la imagen: ', error.message)
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
		console.error('Error al hacer fetching en una experiencia', error.message)
		throw error
	}
}