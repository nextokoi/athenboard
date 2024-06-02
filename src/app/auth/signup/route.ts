import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	const url = new URL(req.url)
	const cookieStore = cookies()

	const formData = await req.formData()

	const email = String(formData.get('email'))
	const password = String(formData.get('password'))

	if (!email || !password) {
		return NextResponse.json(
			{
				error: 'Email and password are required',
			},
			{ status: 400 },
		)
	}

	const supabase = createRouteHandlerClient({
		cookies: () => cookieStore,
	})

	try {
		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${url.origin}/auth/callback`,
			},
		})

		if (error) {
			return NextResponse.json(
				{
					error: error.message,
				},
				{ status: 400 },
			)
		}

		return NextResponse.redirect(url.origin, {
			status: 301,
		})
	} catch (error) {
		return NextResponse.json(
			{
				error: 'Internal server error',
			},
			{ status: 500 },
		)
	}
}
