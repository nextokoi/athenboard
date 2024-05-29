import { NextRequest, NextResponse } from 'next/server'

const stripe = require('stripe')(
	'sk_test_51PLURrIa4tPTxQZFSvUoB2XPxsm3heO0zi0mmCSZ8LbIDbDQmkHRZ7p5mpDT2igyBiprcu8AvophzNqhu7T0Whjf00c4G9h1BV',
)

export async function POST(request: NextRequest) {
	const body = await request.json()
	const price = body.price * 100

	const session = await stripe.checkout.sessions.create({
		success_url: 'http://localhost:3000/success',
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
	})

	return NextResponse.json(session)
}
