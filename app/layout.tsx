import { Container } from '@/components/shared/container'
import { METADATA } from '@/lib/site'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

export const metadata = METADATA

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable}  antialiased`}>
				<Providers>
					<Container>{children}</Container>
				</Providers>
			</body>
		</html>
	)
}
