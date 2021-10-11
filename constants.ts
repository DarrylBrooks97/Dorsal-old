// Canonical URL
export const canonicalUrl: string =
	process.env.NEXT_PUBLIC_TARGET_ENV === 'prod'
		? 'https://dorsal.vercel.app/'
		: process.env.NEXT_PUBLIC_TARGET_ENV === 'staging'
		? 'https://staging-dorsal.vercel.app/'
		: 'http://localhost:3000/';
export const baseURL: string =
	process.env.NEXT_PUBLIC_TARGET_ENV === 'prod'
		? 'https://dorsal.vercel.app/'
		: process.env.NEXT_PUBLIC_TARGET_ENV === 'staging'
		? 'https://staging-dorsal.vercel.app/'
		: 'http://localhost:3000/';
