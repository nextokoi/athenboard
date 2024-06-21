import { createClient } from '@/app/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export async function POST(request: NextRequest) {
	try {
		const supabase = createClient()

		const { data: supabaseSession } = await supabase.auth.getSession()

		if (!supabaseSession) {
			return new Response(null, { status: 401 })
		}

		const { data: userData, error: userError } = await supabase.auth.getUser()

		const body = await request.json()
		const price = body.price * 100

		if (userError) {
			return NextResponse.json({ error: userError.message }, { status: 500 })
		}

		const { email } = userData.user || {}
		const { user_name } = userData.user?.user_metadata || {}

		const { data: userRecord, error: fetchRecord } = await supabase
			.from('users')
			.select('stripe_customer_id')
			.eq('id', userData.user?.id)
			.single()

		if (fetchRecord) {
			return NextResponse.json({ error: fetchRecord.message }, { status: 500 })
		}

		let customerId = userRecord.stripe_customer_id

		if (!customerId) {
			const customer = await stripe.customers.create({
				name: user_name,
				email: email,
			})

			customerId = customer.id

			const { error: customerError } = await supabase
				.from('users')
				.update({ stripe_customer_id: customerId })
				.eq('id', userData.user?.id)

			if (customerError) {
				return NextResponse.json(
					{ error: customerError.message },
					{ status: 500 },
				)
			}
		}

		const session = await stripe.checkout.sessions.create({
			success_url:
				'https://violet-icons-greet.loca.lt/checkout/success?valid=true',
			cancel_url:
				'https://violet-icons-greet.loca.lt/checkout/cancel?valid=true',
			line_items: [
				{
					price_data: {
						currency: 'usd',
						product_data: {
							name: body.title,
							images: [body.image],
						},
						unit_amount: price,
					},
					quantity: 1,
				},
			],
			mode: 'payment',
			customer: customerId,
			metadata: {
				experience_id: body.id,
				user_id: userData.user?.id,
				image: body.image,
				date: body.date,
				hour: body.hour,
				availableLanguages: body.availableLanguages,
			},
		})

		return NextResponse.json(session)
	} catch (error) {
		console.error('Error creating checkout session: ', error)
		return NextResponse.json(
			{ error: 'Failed to create checkout session' },
			{ status: 500 },
		)
	}
}
