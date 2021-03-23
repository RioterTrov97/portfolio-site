import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Darkmode from './Darkmode';
import Footer from './Footer';
import Intro from './Intro';
import Nav from './Nav';
import Projects from './Projects';

function App() {
	const location = useLocation();
	const [darkTheme, setDarkTheme] = useState(false);
	const [toggleDarkMode, setToggleDarkMode] = useState(false);

	useEffect(() => {
		if (location.hash) {
			let elem = document.getElementById(location.hash.slice(1));
			if (elem) {
				elem.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		}
	}, [location]);

	useEffect(() => {
		const dark = window.localStorage.getItem('darkMode');

		if (dark) {
			if (dark === 'true') {
				setDarkTheme(true);
			} else {
				setDarkTheme(false);
			}
		} else {
			window.localStorage.setItem('darkMode', false);
		}
	}, [toggleDarkMode]);

	const toggleTheme = () => {
		window.localStorage.setItem('darkMode', !darkTheme);
		setToggleDarkMode(!toggleDarkMode);
	};

	return (
		<div className="App">
			<Nav theme={darkTheme} />
			<Darkmode theme={darkTheme} toggle={toggleTheme} />
			<Footer theme={darkTheme} />
			<Intro theme={darkTheme} />
			<About theme={darkTheme} />
			<Projects theme={darkTheme} />
			<Contact theme={darkTheme} />
		</div>
	);
}

export default App;
