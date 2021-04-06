import React from 'react';
import '../styles/DarkMode.css';
import sunny from '../images/sunny.svg';

function Darkmode({ theme, toggle }) {
	return (
		<div className="DarkModeToggle">
			<p
				className={
					theme ? 'DarkToggleHeading sunnyHead' : 'DarkToggleHeading'
				}>
				Theme
			</p>
			<div
				className={theme ? 'DarkToggle sunnyMode' : 'DarkToggle'}
				onClick={() => toggle()}>
				<img
					src={
						theme
							? sunny
							: 'https://image.flaticon.com/icons/svg/2033/2033921.svg'
					}
					alt=""
				/>
			</div>
		</div>
	);
}

export default Darkmode;
