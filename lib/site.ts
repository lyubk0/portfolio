import { Metadata } from 'next'

export const SITE_MANIFEST = {
	name: 'Vladyslav Liubchenko',
	short_name: 'Vladyslav Liubchenko',
	description: 'Frontend Developer',
	url: process.env.NEXT_PUBLIC_BASE_URL as string,
	author: {
		name: 'Vladyslav Liubchenko',
	},
}

export const METADATA: Metadata = {
	metadataBase: new URL(SITE_MANIFEST.url),
	title: {
		default: SITE_MANIFEST.name,
		template: `%s`,
	},
	description: SITE_MANIFEST.description,
	keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Zustand'],
	authors: [{ name: SITE_MANIFEST.author.name }],
	creator: SITE_MANIFEST.author.name,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: SITE_MANIFEST.url,
		siteName: SITE_MANIFEST.name,
		description: SITE_MANIFEST.description,
		images: [
			{
				url: `${SITE_MANIFEST.url}/preview.jpg`,
				width: 1200,
				height: 630,
				alt: SITE_MANIFEST.name,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		description: SITE_MANIFEST.description,
		images: [`${SITE_MANIFEST.url}/preview.jpg`],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: SITE_MANIFEST.url,
	},
}
