import type { Metadata } from 'next'
import './globals.css'
import { NavbarComponent } from './components/layouts/navbar';
import { Footer } from './components/layouts/footer';
import { LoginNav } from './components/layouts/login-nav';

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
			<body className='flex flex-col min-h-screen'>
				<NavbarComponent>
					<LoginNav />
				</NavbarComponent>
				<main className='flex-grow bg-[#F5F5F5]'>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	)
}
