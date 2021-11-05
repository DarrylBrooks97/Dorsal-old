import Image from 'next/image';
import RotatingText from '@/components/rotating-text';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { homepageImages } from '@/constants';
import { validateEmail } from '@/utils/validateEmail';
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

export default function Home() {
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
		localStorage.setItem('email', signUpEmail);
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
							pt={10}
							display="flex"
							justify="center"
							w={{ base: '80%', md: '100%' }}
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
							alt="ciclid"
							draggable={false}
							src={homepageImages[1]}
							width={256}
							height={256}
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
							alt="ciclid 2"
							src={homepageImages[2]}
							width={228}
							height={228}
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
							alt="ciclid 3"
							src={homepageImages[3]}
							width={128}
							height={128}
						/>
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
}
