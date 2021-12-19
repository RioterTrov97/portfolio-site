import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import About from './screens/About';
import './styles/App.css';
import Contact from './screens/Contact';
import Darkmode from './components/Darkmode';
import Footer from './components/Footer';
import Intro from './screens/Intro';
import Nav from './components/Nav';
import Projects from './screens/Projects';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const location = useLocation();
	const [lightTheme, setLightTheme] = useState(true);
	const [toggleDarkMode, setToggleDarkMode] = useState(false);
	const [isIntersectingContact, setIsIntersectingContact] = useState(false);

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

	const handleContactIntersection = useCallback(
		(val) => setIsIntersectingContact(val),
		[]
	);

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
			<Nav
				theme={lightTheme}
				setIsIntersectingContact={handleContactIntersection}
			/>
			<Darkmode theme={lightTheme} toggle={toggleTheme} />
			<Footer
				theme={lightTheme}
				isIntersectingContact={isIntersectingContact}
			/>
			<Intro theme={lightTheme} />
			<About theme={lightTheme} />
			<Projects theme={lightTheme} />
			<Contact theme={lightTheme} />
		</div>
	);
}

export default App;
