import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export async function POST(request: NextRequest) {
	const body = await request.text()
	const headersList = headers()
	const sig = headersList.get('stripe-signature')

	// biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
	let event

	try {
		event = stripe.webhooks.constructEvent(
			body,
			sig,
			process.env.STRIPE_WEBHOOK_SECRET,
		)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: error.message }, { status: 400 })
	}

	switch (event.type) {
		case 'checkout.session.completed': {
			const checkoutSessionCompleted = event.data.object
			console.log({ checkoutSessionCompleted })
			break
		}
		default: {
			console.log(`Unhandled event type ${event.type}`)
		}
	}

	return new Response(null, { status: 200 })
}
