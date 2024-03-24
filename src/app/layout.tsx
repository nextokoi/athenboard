import type { Metadata } from 'next'
import './globals.css'
import { NavbarComponent } from './components/layouts/navbar';
import { Footer } from './components/layouts/footer';

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
				<NavbarComponent />
				{children}
				<Footer />
			</body>
		</html>
	)
}
