import React from 'react';
import '../styles/Skill.css';

function Skill({ skillImg, skillLink, theme }) {
	return (
		<div
			className={theme ? 'skillInfo' : 'skillInfo skillBlack'}
			onClick={() => window.open(skillLink)}>
			<img src={skillImg} alt="" />
		</div>
	);
}

export default Skill;
