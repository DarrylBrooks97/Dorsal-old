import RotatingText from '@/components/rotating-text';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { homepageImages } from '@/constants';
import {
	Box,
	Flex,
	Heading,
	VStack,
	Image,
	Button,
	HStack,
	Input,
	Center,
} from '@chakra-ui/react';

export default function Home() {
	const router = useRouter();
	const [signUpEmail, setSignUpEmail] = useState<string>('');
	return (
		<Box bg="brand.offwhite">
			<Flex
				h="100%"
				w="100%"
				p={{ sm: 4, md: '10', lg: '30' }}
				display={{ sm: 'block', md: 'flex' }}
			>
				<VStack
					align="left"
					textAlign={{
						base: 'center',
						md: 'start',
					}}
					w={{ base: 'auto', md: '60%', xl: 'auto' }}
				>
					<Heading mt="50%" fontSize="6xl">
						Dorsal
					</Heading>
					<RotatingText />
					<Center>
						<HStack
							pt={10}
							w={{ base: '80%', md: '100%' }}
							display="flex"
							justify="center"
						>
							<Input
								placeholder="Email address"
								borderColor="#000000"
								onChange={(e) => {
									setSignUpEmail(e.target.value);
								}}
							></Input>
							<Button
								color="brand.offwhite"
								bg="brand.green"
								onClick={() => {
									router.push('/signup', '', {
										shallow: true,
									});
								}}
							>
								Sign up
							</Button>
						</HStack>
					</Center>
				</VStack>
				<Flex
					flexDirection="column"
					justifyContent="center"
					position="relative"
					ml={10}
				>
					<Image
						alt="coral reef"
						w="100%"
						src={homepageImages[0]}
						h={{ base: '50%', lg: 'auto' }}
						display={{ base: 'none', md: 'block' }}
						mt={{ md: '20%' }}
					/>
					<Image
						position="absolute"
						alt="ciclid"
						transform="scaleX(-1)"
						top="20%"
						left="10%"
						src={homepageImages[1]}
						w={256}
						h={256}
						display={{ base: 'none', md: 'block', lg: 'block' }}
					/>
					<Image
						position="absolute"
						alt="ciclid 2"
						right="10%"
						src={homepageImages[2]}
						w={228}
						h={228}
						display={{ base: 'none', md: 'block', lg: 'block' }}
					/>
					<Image
						position="absolute"
						alt="ciclid 3"
						right="30%"
						top="10%"
						src={homepageImages[3]}
						w={128}
						h={128}
						display={{ base: 'none', md: 'block', lg: 'block' }}
					/>
				</Flex>
			</Flex>
		</Box>
	);
}
