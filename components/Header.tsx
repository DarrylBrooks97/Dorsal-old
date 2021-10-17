import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { MdMenu, MdClose } from 'react-icons/md';
import {
	Box,
	HStack,
	Spacer,
	Button,
	Image,
	Flex,
	ButtonGroup,
	useDisclosure,
	Modal,
	ModalBody,
	ModalContent,
	ModalCloseButton,
	ModalOverlay,
} from '@chakra-ui/react';

export default function Header(): ReactJSXElement {
	const router = useRouter();
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		if (typeof window) {
			window.addEventListener('load', () => {
				setIsMobile(window.innerWidth < 768);
			});

			window.addEventListener('resize', () => {
				if (window.innerWidth < 768) {
					setIsMobile(true);
				} else {
					setIsMobile(false);
					setIsClicked(false);
					onClose();
				}
			});
		}
	}, []);

	return (
		<Box w="100%" h="auto" borderBottom="1px black" bg="brand.offwhite">
			<HStack direction={{ base: 'column', md: 'row' }}>
				<Image
					src="logo.png"
					pt={2}
					pl={2}
					w={{ base: '64px', lg: '64px' }}
					h={{ base: '64px', lg: '64px' }}
					alt="logo"
					onClick={() =>
						window.location.pathname !== '/' ? router.push('/') : ''
					}
					cursor="pointer"
				/>
				<Spacer />
				<MdMenu
					style={{
						display: isMobile && !isClicked ? 'block' : 'none',
						marginRight: '5px',
						height: '32px',
						width: '32px',
						transition: 'all 0.5s',
						cursor: 'pointer',
					}}
					onClick={onOpen}
				/>
				<ButtonGroup
					pr={2}
					spacing={{ base: '0', md: '2' }}
					flexDir={{ base: 'column', md: 'column' }}
					position={{ base: 'absolute', md: 'static' }}
					marginLeft={{ base: 'auto' }}
					marginRight={{ base: 'auto' }}
					w={{ base: '50%', md: 'auto' }}
					display={{
						base: isClicked ? 'flex' : 'none',
						md: 'block',
					}}
				>
					<Button
						bg="brand.offwhite"
						color="black"
						border="2px"
						borderColor="brand.green"
						onClick={() =>
							window.location.pathname !== '/login'
								? router.push('/login')
								: ''
						}
						_hover={{ color: 'brand.green' }}
					>
						Login
					</Button>
					<Button
						bg="brand.green"
						color="brand.offwhite"
						mt={{ base: '2', md: '0' }}
						onClick={() =>
							window.location.pathname !== '/signup'
								? router.push('/signup')
								: ''
						}
						_hover={{ color: 'brand.yellow' }}
					>
						Sign up
					</Button>
				</ButtonGroup>
				<MdClose
					style={{
						display: isMobile && isClicked ? 'block' : 'none',
						marginRight: '5px',
						height: '32px',
						width: '32px',
					}}
					onClick={() => setIsClicked(!isClicked)}
				/>
			</HStack>
			<Modal
				size="lg"
				motionPreset="slideInBottom"
				onClose={onClose}
				isOpen={isOpen}
			>
				<ModalOverlay backdropFilter="blur(5px)" />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<Flex flexDir="column" mt="10">
							<Button
								bg="brand.green"
								mb="5"
								color="brand.offwhite"
								_hover={{ color: 'brand.yellow' }}
								onClick={() => {
									window.location.pathname !== '/signup'
										? router.push('/signup')
										: '';
									onClose();
								}}
							>
								Sign up
							</Button>
							<Button
								bg="brand.offwhite"
								color="black"
								border="2px"
								borderColor="brand.green"
								mb="5"
								_hover={{ color: 'brand.green' }}
								onClick={() => {
									window.location.pathname !== '/login'
										? router.push('/login')
										: '';
									onClose();
								}}
							>
								Login
							</Button>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	);
}
