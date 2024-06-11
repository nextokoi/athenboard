import { createClient } from '@/app/utils/supabase/server'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const Joi = require('joi')

export async function POST(request: NextRequest) {
	try {
		const supabase = createClient()

		const { data: supabaseSession } = await supabase.auth.getSession()

		if (!supabaseSession) {
			return new Response(null, { status: 401 })
		}

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

		const schema = Joi.object({
			id: Joi.string().required(),
			customer: Joi.string().required(),
			experience_id: Joi.string().required(),
			image: Joi.string().required(),
			available_languages: Joi.string().required(),
			date: Joi.string().required(),
			hour: Joi.string().required(),
			amount_total: Joi.number().required(),
			mode: Joi.string().valid('payment').required(),
			payment_method_types: Joi.string().valid('card').required(),
			status: Joi.string().valid('complete').required(),
			created: Joi.string().required(),
		})

		const insertInvoice = async () => {
			try {
				const checkoutSessionCompleted = event.data.object
				console.log({ checkoutSessionCompleted })

				const paymentMethodType =
					checkoutSessionCompleted.payment_method_types[0]

				const createdDate = new Date(
					checkoutSessionCompleted.created * 1000,
				).toISOString()

				const amountTotal = checkoutSessionCompleted.amount_total / 100

				const { error: validationError, value } = schema.validate({
					id: checkoutSessionCompleted.id,
					customer: checkoutSessionCompleted.customer,
					experience_id: checkoutSessionCompleted.metadata.experience_id,
					image: checkoutSessionCompleted.metadata.image,
					available_languages:
						checkoutSessionCompleted.metadata.availableLanguages,
					date: checkoutSessionCompleted.metadata.date,
					hour: checkoutSessionCompleted.metadata.hour,
					amount_total: amountTotal,
					mode: checkoutSessionCompleted.mode,
					payment_method_types: paymentMethodType,
					status: checkoutSessionCompleted.status,
					created: createdDate,
				})

				if (validationError) {
					throw new Error(`Validation error: ${validationError.message}`)
				}

				const { data, error: supabaseInsertError } = await supabase
					.from('invoices')
					.insert([
						{
							id: value.id,
							customer: value.customer,
							experience_id: value.experience_id,
							image: value.image,
							available_languages: value.available_languages,
							date: value.date,
							hour: value.hour,
							amount_total: value.amount_total,
							mode: value.mode,
							payment_method_types: value.payment_method_types,
							status: value.status,
							created: value.created,
						},
					])

				if (supabaseInsertError) {
					throw new Error(
						`Supabase insert error: ${supabaseInsertError.message}`,
					)
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
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 },
		)
	}
}
