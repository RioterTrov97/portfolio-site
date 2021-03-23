import React from 'react';
import './Skill.css';

function Skill({ skillImg, skillLink }) {
	return (
		<div className="skillInfo" onClick={() => window.open(skillLink)}>
			<img src={skillImg} alt="" />
		</div>
	);
}

export default Skill;
