import React from 'react';
import '../styles/Project.css';
import { ReactComponent as GitHub } from '../images/github.svg';

function Project({
	projectName,
	projectDesc,
	projectPic,
	projectGitLink,
	projectLive,
	theme,
}) {
	return (
		<div className={theme ? 'projectItem' : 'projectItem projectBlack'}>
			<img className="projectPic" src={projectPic} alt="" />
			<h4 className="projectTitle">
				{projectName}{' '}
				<span
					onClick={(e) => {
						e.preventDefault();
						window.open(
							projectGitLink
								? projectGitLink
								: 'https://github.com/RioterTrov97'
						);
					}}>
					<GitHub />
				</span>
			</h4>
			<div
				className={theme ? 'projectDesc' : 'projectDesc projectDarkTextBlack'}>
				{projectDesc}
			</div>

			<button
				className={`projectButton ${theme ? 'projectDarkBackground' : ''}`}
				onClick={(e) => {
					e.preventDefault();
					window.open(projectLive);
				}}>
				View Live Demo
			</button>
		</div>
	);
}

export default Project;
