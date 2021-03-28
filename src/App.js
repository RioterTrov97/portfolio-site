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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const location = useLocation();
	const [lightTheme, setLightTheme] = useState(false);
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
		const light = window.localStorage.getItem('lightMode');

		if (light) {
			if (light === 'true') {
				setLightTheme(true);
			} else {
				setLightTheme(false);
			}
		} else {
			window.localStorage.setItem('lightMode', true);
			setLightTheme(true);
		}
	}, [toggleDarkMode]);

	const toggleTheme = () => {
		window.localStorage.setItem('lightMode', !lightTheme);
		setToggleDarkMode(!toggleDarkMode);
	};

	return (
		<div className="App">
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Nav theme={lightTheme} />
			<Darkmode theme={lightTheme} toggle={toggleTheme} />
			<Footer theme={lightTheme} />
			<Intro theme={lightTheme} />
			<About theme={lightTheme} />
			<Projects theme={lightTheme} />
			<Contact theme={lightTheme} />
		</div>
	);
}

export default App;
