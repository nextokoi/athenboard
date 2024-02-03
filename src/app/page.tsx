import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from '@/app/components/auth-button-server'
import { redirect } from 'next/navigation'

export default async function Home() {
	const supabase = createServerComponentClient({ cookies })
	const { data: { session } } = await supabase.auth.getSession()

/* 	if (session === null ){
		redirect('/login')
	} */

	const { data: activities } = await supabase.from('activities').select()
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<AuthButtonServer />
			<pre>{JSON.stringify(activities, null, 2)}</pre>
		</main>
	)
}
