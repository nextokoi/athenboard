import type { Metadata } from 'next'
import './globals.css'
import { NavBar } from './components/navbar'

export const metadata: Metadata = {
	title: 'Athenboard',
	description: 'Ultimate Experiences Market',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<NavBar />
				{children}
			</body>
		</html>
	)
}
