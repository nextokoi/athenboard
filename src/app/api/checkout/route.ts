import { createClient } from '@/app/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()
		const price = body.price * 100

		const supabase = createClient()
		const { data: userData, error: userError } = await supabase.auth.getUser()

		if (userError) {
			return NextResponse.json({ error: userError.message }, { status: 500 })
		}

		const { email } = userData.user || {}
		const { user_name } = userData.user?.user_metadata || {}

		const customer = await stripe.customers.create({
			name: user_name,
			email: email,
		})

		const customerId = customer.id

		const { data: updatedCustomer, error: customerError } = await supabase
			.from('users')
			.update({ stripe_customer_id: customerId })
			.eq('id', userData.user?.id)

		if (customerError) {
			return NextResponse.json(
				{ error: customerError.message },
				{ status: 500 },
			)
		}

		const session = await stripe.checkout.sessions.create({
			success_url: 'http://localhost:3000/checkout/success',
			cancel_url: 'http://localhost:3000/checkout/cancel',
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
			customer: customer.id,
			metadata: {
				experienceId: body.id,
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
