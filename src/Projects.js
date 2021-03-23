import React from 'react';
import './Projects.css';
import Project from './Project';
import netflix from './images/netflix.png';
import todo from './images/todo.png';
import deals from './images/deals.png';
import portfolio from './images/portfolio.png';
import { useHistory } from 'react-router';

function Projects({ theme }) {
	const history = useHistory();
	return (
		<section
			id="projects"
			className={
				theme ? 'projectsContainer' : 'projectsContainer projectsBlack'
			}>
			<div className="projectsInside">
				<div
					className={
						theme
							? 'projectsHeading'
							: 'projectsHeading projectsDarkText'
					}>
					<h2>My recent works</h2>
					<div
						className={
							theme
								? 'projectsHeadingDesc'
								: 'projectsHeadingDesc projectsDarkText'
						}>
						<p>
							Here are a few design projects I've worked on
							recently. Want to see more?
						</p>
						<h3
							className="contactButton"
							onClick={() => history.push('/#contact')}>
							Contact me
						</h3>
					</div>
				</div>

				<div className="projectsPage">
					<Project
						theme={theme}
						projectName="Netflix Trailer"
						projectDesc="Netflix Trailer is a web app that I created where people can watch trailer of almost any movies in the market. Developed with React, Redux, TMDB api, and Firebase."
						projectGitLink="https://github.com/RioterTrov97/netflix-clone"
						projectLive="https://netflix-clone-ebf41.web.app/"
						projectPic={netflix}
					/>
					<Project
						theme={theme}
						projectName="Deals Web App"
						projectDesc="Deals Web App is my personal project where users can share deals across the community. Developed with React, Redux and Firebase."
						projectLive="https://mulyamitra-app.web.app/"
						projectPic={deals}
					/>
					<Project
						theme={theme}
						projectName="Todo App - MERN"
						projectDesc="This is a full stack MERN application created by me. Developed with MongoDB, Express, React, Redux, and Node."
						projectLive="https://todo-app-96f51.web.app/"
						projectPic={todo}
					/>
					<Project
						theme={theme}
						projectName="Portfolio App"
						projectGitLink="https://github.com/RioterTrov97/portfolio-site-2021"
						projectDesc="The portfolio app is my personal project that displays my cabailities as a web dev. Developed with love using React and Redux."
						projectLive="https://portfolio-site-2021.web.app/"
						projectPic={portfolio}
					/>
				</div>
			</div>
		</section>
	);
}

export default Projects;
