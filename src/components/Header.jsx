import { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkMode from '../hook/useDarkMode';
import bgLight from '../assets/bg-desktop-light.jpg';
import bgDark from '../assets/bg-desktop-dark.jpg';

const Header = () => {
	const [colorTheme, setTheme] = useDarkMode();
	const [darkMode, setDarkMode] = useState(
		colorTheme === 'dark' ? false : true,
	);
	const [bgSrc, setBgSrc] = useState(bgLight);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkMode(checked);
	};

	useEffect(() => {
		darkMode ? setBgSrc(bgDark) : setBgSrc(bgLight);
	}, [darkMode]);

	return (
		<div>
			<img
				src={bgSrc}
				alt="hero background"
				className="absolute top-0 w-full h-72 -z-50"
			/>
			<header className="max-w-2xl mx-auto mt-16 mb-4">
				<div className="flex justify-between mx-4">
					<h1 className="text-4xl text-white font-bold tracking-widest uppercase dark:text-white">
						Todo
					</h1>
					<DarkModeSwitch
						checked={darkMode}
						onChange={toggleDarkMode}
						size={32}
						sunColor={'white'}
					/>
				</div>
			</header>
		</div>
	);
};

export default Header;
