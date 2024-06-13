import type { Metadata } from 'next'
import './globals.css'
import { NavbarComponent } from './components/layouts/navbar';
import { Footer } from './components/layouts/footer';
import { LoginNav } from './components/layouts/login-nav';
import { FavoriteProvider } from './context/favorite-context';

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
				<FavoriteProvider>
					<NavbarComponent>
						<LoginNav />
					</NavbarComponent>
					<main className='flex-grow bg-[#F5F5F5]'>
						{children}
					</main>
					<Footer />
				</FavoriteProvider>
			</body>
		</html>
	)
}
