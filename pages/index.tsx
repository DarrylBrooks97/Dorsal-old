import RotatingText from '@/components/rotating-text';
import {
	Box,
	Flex,
	Heading,
	VStack,
	Spacer,
	Text,
	Image,
	Button,
	HStack,
	Input,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export default function Home() {
	const [innerHeight, setInnerHeight] = useState(0);
	const [innerWidth, setInnerWidth] = useState(0);

	useEffect(() => {
		if (window) {
			setInnerHeight(window.innerHeight);
			setInnerWidth(window.innerWidth);
		}
	}, []);
	return (
		<Box bg="brand.offwhite">
			<Flex
				p={{ sm: 4, md: '10', lg: '30' }}
				h="100vh"
				w="100vw"
				display={{ sm: 'block', md: 'flex', lg: 'flex' }}
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
						display={{ base: 'none', md: 'block', lg: 'block' }}
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
