import type { Metadata } from 'next'
import './globals.css'
import { Footer } from './components/layouts/footer';
import { LoginNav } from './components/layouts/login-nav';
import { AppNavbar } from './components/layouts/app-navbar';
import { ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry'

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
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" />
			</head>
			<body className='flex flex-col min-h-screen'>
				<ConfigProvider
					theme={{
						token: {
							colorPrimary: '#006876'
						}
					}}
				>
					<header className='md:mb-14'>
						<AppNavbar>
							<LoginNav />
						</AppNavbar>
					</header>
					<div className='flex-grow bg-[#F5F5F5]'>
						<AntdRegistry>
							{children}
						</AntdRegistry>
					</div>
					<Footer />
				</ConfigProvider>
			</body>
		</html>
	)
}
