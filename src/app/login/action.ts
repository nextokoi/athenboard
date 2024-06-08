'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../utils/supabase/server'
import { randomUUID } from 'crypto'

export async function login(formData: FormData) {
	const supabase = createClient()
	// type-casting here for convenience
	// in practice, you should validate your inputs

	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	}

	const { error } = await supabase.auth.signInWithPassword(data)

	if (error) {
		redirect('/error')
	}

	revalidatePath('/', 'layout')
	redirect('/')
}

export async function signup(formData: FormData) {
	const supabase = createClient()

	const uuid = randomUUID().slice(0, 8)
	const user_name = `user_${uuid}` as string
	const avatar_url =
		`https://api.dicebear.com/5.x/bottts/png?seed=${user_name}` as string
	const phone = ''
	const address = ''
	const emergency_contact = ''

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
		options: {
			data: {
				user_name,
				avatar_url,
				phone,
				address,
				emergency_contact,
			},
		},
	}

	const { error } = await supabase.auth.signUp(data)

	if (error) {
		//redirect('/error')
		console.error('Error during signup:', error)
	}

	revalidatePath('/', 'layout')
	redirect('/')
}
