import { createClient } from '@/app/utils/supabase/server'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export async function POST(request: NextRequest) {
	try {
		const body = await request.text()
		const headersList = headers()
		const sig = headersList.get('stripe-signature')

		const supabase = createClient()

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

		const insertInvoice = async () => {
			try {
				const checkoutSessionCompleted = event.data.object
				console.log({ checkoutSessionCompleted })

				const paymentMethodType = checkoutSessionCompleted.payment_method_types[0]

				const { data, error } = await supabase.from('invoices').insert([
					{
						id: checkoutSessionCompleted.id,
						customer: checkoutSessionCompleted.customer,
						experience_id: checkoutSessionCompleted.metadata.experience_id,
						amount_paid: checkoutSessionCompleted.amount_total / 100,
						payment_mode: checkoutSessionCompleted.payment_mode,
						payment_method_type: paymentMethodType,
						status: checkoutSessionCompleted.status,
						created: checkoutSessionCompleted.created,
					},
				])

				if (error){
					throw new Error(`Supabase insert error: ${error.message}`)
				}

				return data
			} catch (error) {
				console.error('Error inserting data into Supabase: ', error.message)
			}
		}

		switch (event.type) {
			case 'checkout.session.completed': {
				await insertInvoice()
				break
			}
			default: {
				console.log(`Unhandled event type ${event.type}`)
			}
		}

		return new Response(null, { status: 200 })
	} catch (error) {
		console.error('Error handling POST request: ', error.message)
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
	}
}
