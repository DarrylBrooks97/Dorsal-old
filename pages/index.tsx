import RotatingText from '@/components/rotating-text';
import Header from '@/components/Header';
import axios from 'axios';
import { useState } from 'react';
import { validateEmail } from '@/utils/validateEmail';

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
	const [signUpEmail, setSignUpEmail] = useState<string>('');
	const [loginEmail, setLoginInEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('2345@#$%'); // Password should at least be 6 char

	const handleSignUpClick = async () => {
		if (!validateEmail(loginEmail)) {
			console.log('not a valid email');
			return;
		}
		try {
			const { data, err, message }: any = await (
				await axios.post('/api/auth/signup', {
					email: loginEmail,
					password: password,
				})
			).data;
			// If data then its successful
			// If message then there was an error
			console.log({ data, err, message });
		} catch (error) {
			console.log('Error: ' + error);
		}
	};
	const handleLoginClick = async () => {
		if (!validateEmail(loginEmail)) {
			console.log('not a valid email');
			return;
		}
		try {
			// If data and error are undefined = 200
			const { data, error }: any = await (
				await axios.post('/api/auth/login', {
					loginEmail,
				})
			).data;
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Box bg="brand.offwhite">
			<Header />
			<Flex
				p={{ sm: 4, md: '10', lg: '30' }}
				display={{ sm: 'block', md: 'flex' }}
				h="100%"
				w="100%"
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
									setLoginInEmail(e.target.value);
								}}
							></Input>
							<Button
								color="brand.offwhite"
								bg="brand.green"
								onClick={() => {
									handleSignUpClick();
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
						src="https://preview.free3d.com/img/2018/04/2397296571055080768/ztn7hhzq-900.jpg"
						alt="coral reef"
						w="100%"
						h={{ base: '50%', lg: 'auto' }}
						display={{ base: 'none', md: 'block' }}
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
						alt="ciclid 3"
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
