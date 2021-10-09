// Canonical URL
export const canonicalUrl: string =
	process.env.NEXT_PUBLIC_TARGET_ENV === 'prod'
		? 'https://www.dorsal.vercal.app/'
		: process.env.NEXT_PUBLIC_TARGET_ENV === 'staging'
		? 'http://www.staging-dorsal.vercal.app/'
		: 'http://localhost:3000/';
