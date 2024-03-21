import type { Metadata } from 'next'
import './globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { NavbarComponent } from './components/navbar'
import { NavbarKeep } from './components/navbar-keep';
import { Footer } from './components/footer';

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
			{/* 	<NavbarComponent /> */}
				<NavbarKeep />
				{children}
				<Footer />
			</body>
		</html>
	)
}
