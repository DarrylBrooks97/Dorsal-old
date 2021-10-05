import RotatingText from '@/components/rotating-text';
import Header from '@/components/Header';
import {
	Box,
	Flex,
	Heading,
	VStack,
	Image,
	Button,
	HStack,
	Input,
} from '@chakra-ui/react';
import { useEffect } from 'react';

export default function Home() {
	return (
		<Box bg="brand.offwhite">
			<Header />
			<Flex
				p={{ sm: 4, md: '10', lg: '30' }}
				display={{ sm: 'block', md: 'flex', lg: 'flex' }}
				h="100%"
				w="100%"
			>
				<VStack
					align="left"
					textAlign={{
						base: 'center',
						sm: 'center',
						md: 'start',
						lg: 'start',
						xl: 'start',
					}}
				>
					<Heading mt="50%" fontSize="6xl">
						Dorsal
					</Heading>
					<RotatingText />
					<HStack pt={10}>
						<Input
							placeholder="Email address"
							borderColor="#000000"
						></Input>
						<Button color="brand.offwhite" bg="brand.green">
							Sign up
						</Button>
					</HStack>
				</VStack>
				<Flex
					flexDirection="column"
					justifyContent="center"
					position="relative"
					ml={10}
				>
					<Image
						src="https://preview.free3d.com/img/2018/04/2397296571055080768/ztn7hhzq-900.jpg"
						alt="coral reef"
						w="100%"
						h={{ base: '50%', lg: 'auto' }}
						display={{ base: 'none', md: 'block', lg: 'block' }}
						mt={{ md: '20%' }}
					/>
					<Image
						position="absolute"
						src="https://spectrum-sitecore-spectrumbrands.netdna-ssl.com/~/media/Pet/Tetra/Images/Fish%20Types/Cichlid/Cichlid.png?mw=255"
						alt="ciclid"
						w={256}
						h={256}
						transform="scaleX(-1)"
						top="20%"
						left="10%"
						display={{ base: 'none', md: 'block', lg: 'block' }}
					/>
					<Image
						position="absolute"
						src="https://www.pngkey.com/png/full/899-8990269_marmalade-peacock-exotic-cichlid.png"
						alt="ciclid 2"
						w={228}
						h={228}
						right="10%"
						display={{ base: 'none', md: 'block', lg: 'block' }}
					/>
					<Image
						position="absolute"
						src="https://www.aquaticdesign.co.uk/wp-content/uploads/2018/03/Tetrastigma-1.png"
						alt="ciclid"
						w={128}
						h={128}
						right="30%"
						top="10%"
						display={{ base: 'none', md: 'block', lg: 'block' }}
					/>
				</Flex>
			</Flex>
		</Box>
	);
}
