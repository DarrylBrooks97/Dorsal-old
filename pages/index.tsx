import Image from 'next/image';
import RotatingText from '@/components/rotating-text';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { homepageImages } from '@/constants';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { validateEmail } from '@/utils/validateEmail';
import { setData } from '@/utils/cachedData';
import {
	Box,
	Flex,
	Heading,
	VStack,
	Button,
	HStack,
	Input,
	Center,
	useToast,
} from '@chakra-ui/react';

export default function Home(): ReactJSXElement {
	const router = useRouter();
	const toast = useToast();
	const [signUpEmail, setSignUpEmail] = useState<string>('');

	const handleEmailSignUp = (): void => {
		if (!validateEmail(signUpEmail)) {
			toast({
				title: 'Not a valid email address',
				status: 'warning',
				duration: 5000,
				isClosable: true,
			});
			return;
		}

		setData('email', signUpEmail, 600000);

		router.push('/signup', '', {
			shallow: true,
		});
	};

	return (
		<Box bg="brand.offwhite">
			<Flex
				w="full"
				p={{ sm: 4, md: '10', lg: '30' }}
				display={{ sm: 'block', md: 'flex' }}
			>
				<VStack
					align="left"
					textAlign={{
						base: 'center',
						md: 'start',
					}}
					w={{ base: 'auto', md: '60%', xl: '50%' }}
				>
					<Heading mt="50%" fontSize="6xl">
						Dorsal
					</Heading>
					<RotatingText />
					<Center>
						<HStack
							display="flex"
							justify="center"
							pt={10}
							w={{ base: '80%', md: '100%' }}
						>
							<Input
								placeholder="Email address"
								borderColor="#000000"
								onKeyDown={(e): void => {
									e.key === 'Enter' && handleEmailSignUp();
								}}
								onChange={(e): void =>
									setSignUpEmail(e.target.value)
								}
							></Input>
							<Button
								color="brand.offwhite"
								bg="brand.green"
								onClick={handleEmailSignUp}
							>
								Sign up
							</Button>
						</HStack>
					</Center>
				</VStack>
				<Flex
					flexDirection="column"
					justifyContent="center"
					w="full"
					position="relative"
					ml={10}
				>
					<Box
						display={{ base: 'none', md: 'block' }}
						h={{ base: '50%', lg: 'full' }}
						mt={{ md: '20%' }}
					>
						<Image
							priority
							alt="coral reef"
							width="900px"
							placeholder="blur"
							height="486px"
							src={homepageImages[0]}
							blurDataURL={homepageImages[0]}
						/>
					</Box>
					<Box
						pos="absolute"
						top="20%"
						left="0%"
						transform="scaleX(-1)"
						h={{ base: '50%', lg: 'full' }}
						display={{ base: 'none', md: 'block', lg: 'block' }}
					>
						<Image
							priority
							alt="ciclid"
							placeholder="blur"
							draggable={false}
							width={256}
							height={256}
							src={homepageImages[1]}
							blurDataURL={homepageImages[1]}
						/>
					</Box>
					<Box
						pos="absolute"
						right="0%"
						top="30%"
						display={{ base: 'none', md: 'block', lg: 'block' }}
						h={{ base: '50%', lg: 'full' }}
					>
						<Image
							priority
							alt="ciclid 2"
							placeholder="blur"
							width={228}
							height={228}
							src={homepageImages[2]}
							blurDataURL={homepageImages[2]}
						/>
					</Box>
					<Box
						pos="absolute"
						right="35%"
						top="20%"
						display={{ base: 'none', md: 'block', lg: 'block' }}
						h={{ base: '50%', lg: 'full' }}
					>
						<Image
							priority
							alt="ciclid 3"
							placeholder="blur"
							width={128}
							height={128}
							src={homepageImages[3]}
							blurDataURL={homepageImages[3]}
						/>
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
}
