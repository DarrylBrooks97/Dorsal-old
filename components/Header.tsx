import {
	Box,
	HStack,
	Spacer,
	Button,
	Image,
	ButtonGroup,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

export default function Header() {
	const [isMobile, setIsMobile] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		if (window) {
			window.addEventListener('resize', () => {
				if (window.innerWidth < 768) {
					setIsMobile(true);
				} else {
					setIsMobile(false);
					setIsClicked(false);
				}
			});
		}
	}, []);

	return (
		<Box w="100%" h="auto" borderBottom="1px black">
			<HStack
				direction={{ base: 'column', md: 'row' }}
				position="relative"
			>
				<Image
					src="logo.png"
					pt={2}
					pl={2}
					w={{ base: '64px', lg: '64px' }}
					h={{ base: '64px', lg: '64px' }}
					alt="logo"
				/>
				<Spacer />
				{/* <hr /> */}
				<MdMenu
					style={{
						display: isMobile && !isClicked ? 'block' : 'none',
						marginRight: '5px',
						height: '32px',
						width: '32px',
						transition: 'all 0.5s',
					}}
					onClick={() => setIsClicked(!isClicked)}
				/>
				<ButtonGroup
					spacing={{ base: '0', md: '2' }}
					pr={2}
					flexDir={{ base: 'column', md: 'row' }}
					display={{
						base: isClicked ? 'block' : 'none',
						md: 'block',
					}}
					position={{ base: 'absolute', md: 'static' }}
					top="100%"
					left="30%"
				>
					<Button
						bg="brand.offwhite"
						color="black"
						border="2px"
						borderColor="brand.green"
						_hover={{ color: 'brand.green' }}
					>
						Login
					</Button>
					<Button
						bg="brand.green"
						mt={{ base: '2', md: '0' }}
						color="brand.offwhite"
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
		</Box>
	);
}
