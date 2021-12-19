import React from 'react';
import '../styles/DarkMode.css';
import sunny from '../images/sunny.svg';
import moony from '../images/moony.svg';

function Darkmode({ theme, toggle }) {
	return (
		<div className="DarkModeToggle">
			<div
				className={theme ? 'DarkToggle sunnyMode' : 'DarkToggle'}
				onClick={() => toggle()}>
				<img src={theme ? sunny : moony} alt="" />
			</div>
		</div>
	);
}

export default Darkmode;
