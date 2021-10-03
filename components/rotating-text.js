import { Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';

const temp = () => {
	var words = document.getElementsByClassName('word');
	var wordArray = [];
	var currentWord = 0;

	const splitLetters = (word) => {
		var content = word.innerHTML;
		word.innerHTML = '';
		var letters = [];

		for (var i = 0; i < content.length; i++) {
			var letter = document.createElement('span');
			letter.className = 'letter';
			letter.innerHTML = content.charAt(i);
			word.appendChild(letter);
			letters.push(letter);
		}

		wordArray.push(letters);
	};

	words[currentWord].style.opacity = 1;
	words[0].style.position = 'relative';
	console.log(words[currentWord]);

	for (var i = 0; i < words.length; i++) {
		splitLetters(words[i]);
	}

	const changeWord = () => {
		var cw = wordArray[currentWord];
		var nw =
			currentWord == words.length - 1
				? wordArray[0]
				: wordArray[currentWord + 1];
		// console.log(words[currentWord]);
		words[currentWord].style.position =
			currentWord == wordArray.length - 1 ? 'relative' : 'absolute';
		for (var i = 0; i < cw.length; i++) {
			animateLetterOut(cw, i);
		}
		for (var i = 0; i < nw.length; i++) {
			nw[i].className = 'letter behind';
			nw[0].parentElement.style.opacity = 1;
			animateLetterIn(nw, i);
		}

		currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
	};

	const animateLetterOut = (cw, i) => {
		setTimeout(function () {
			cw[i].className = 'letter out';
		}, i * 80);
	};

	const animateLetterIn = (nw, i) => {
		setTimeout(function () {
			nw[i].className = 'letter in';
		}, 320 + i * 80);
	};

	changeWord();
	setInterval(changeWord, 2500);
};
export default function RotatingText() {
	useEffect(() => {
		if (document) temp();
	}, []);

	return (
		<Box>
			<Text fontSize="3xl">Aquarium </Text>
			<Box as="p" ml={2} mr={2}>
				<Box
					as="span"
					className="word"
					color="brand.blue"
					fontSize="3xl"
				>
					Design
				</Box>
				<Box
					as="span"
					className="word"
					color="brand.yellow"
					fontSize="3xl"
					position="absolute"
				>
					Maintenance
				</Box>
				<Box
					as="span"
					className="word"
					color="brand.green"
					fontSize="3xl"
				>
					Communities
				</Box>
			</Box>
			<Text fontSize="3xl">Simplified</Text>
		</Box>
	);
}
