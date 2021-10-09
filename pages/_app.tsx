import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import { theme } from '../theme';
import { DefaultSeo } from 'next-seo';
import { canonicalUrl } from '../constants';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<DefaultSeo
				defaultTitle="Dorsal"
				description="An platform for aquarium enthusiasts"
				additionalLinkTags={[
					{
						rel: 'icon',
						href: `${canonicalUrl}/favicon.ico`,
					},
					{
					        rel: 'apple-touch-icon',
					        href: `${canonicalUrl}/logo.png`,
					        sizes: '76x76'
					}
				]}
				openGraph={{
					type: 'website',
					url: `${canonicalUrl}`,
					site_name: 'Dorsal 🦈',
					images: [
						{
							url: `${canonicalUrl}/seo_banner.png`,
							width: 800,
							height: 450,
							alt: 'Dorsal Banner',
						},
					],
				}}
				twitter={{
					handle: '@darryl_codes',
					cardType: 'summary_large_image',
				}}
			/>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
