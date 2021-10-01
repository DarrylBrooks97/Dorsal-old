import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const rotatingText = () => {
	let words: NodeListOf<Element> = document.querySelectorAll('.word');
	console.log({ words });
	words.forEach((word) => {
		// let letters = word.textContent?.split('');
		let letters = ['Design', 'Development', 'Marketing', 'Strategy'];
		// console.log({ word });
		word.textContent = '';
		letters?.forEach(({ letter }: any) => {
			let span = document.createElement('span');
			span.textContent = letter;
			span.className = 'letter';
			word.append(span);
		});
	});

	let currentWordIndex = 0;
	let maxWordIndex = words.length - 1;
	(words[currentWordIndex] as HTMLElement).style.opacity = '1';

	let currentWord = words[currentWordIndex];
	let nextWord =
		currentWordIndex === maxWordIndex
			? words[0]
			: words[currentWordIndex + 1];
	// rotate out letters of current word
	Array.from(currentWord.children).forEach((letter, i): any => {
		setTimeout(() => {
			letter.className = 'letter out';
		}, i * 80);
	});
	// reveal and rotate in letters of next word
	(nextWord as HTMLElement).style.opacity = '1';
	Array.from(nextWord.children).forEach((letter, i) => {
		letter.className = 'letter behind';
		setTimeout(() => {
			letter.className = 'letter in';
		}, 340 + i * 80);
	});
	currentWordIndex =
		currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

export default function RotatingText(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (window) {
			setTimeout(() => {
				rotatingText();
				setIsVisible(!isVisible);
			}, 4000);
		}
	}, [isVisible]);

	return (
		<Box mt="50%" className="rotating-text">
			<Text fontSize="3xl">Aquarium</Text>
			<Box as="p">
				<Box as="span" className="word" color="brand.blue">
					Design
				</Box>
				<Box as="span" className="word" color="brand.yellow">
					Maintenance
				</Box>
				<Box as="span" className="word" color="brand.green">
					Communities
				</Box>
			</Box>
			<Text fontSize="3xl">Simplified</Text>
		</Box>
	);
}
