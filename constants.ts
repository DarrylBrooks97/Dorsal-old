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
export const homepageImages: string[] = [
	'https://preview.free3d.com/img/2018/04/2397296571055080768/ztn7hhzq-900.jpg',
	'https://spectrum-sitecore-spectrumbrands.netdna-ssl.com/~/media/Pet/Tetra/Images/Fish%20Types/Cichlid/Cichlid.png?mw=255',
	'https://www.pngkey.com/png/full/899-8990269_marmalade-peacock-exotic-cichlid.png',
	'https://www.aquaticdesign.co.uk/wp-content/uploads/2018/03/Tetrastigma-1.png',
];
