import React from 'react';
import '../styles/Projects.css';
import Project from '../components/Project';
import netflix from '../images/netflix.png';
import openchat from '../images/OpenChat.png';
import bargainbuy from '../images/BargainBuy.png';
import portfolio from '../images/portfolio.png';
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
						projectName="OpenChat - MERN"
						projectGitLink="https://github.com/RioterTrov97/chat-app-frontend"
						projectDesc="OpenChat App is a full stack MERN chatroom web application. Developed with React, Redux, MongoDB, Express, Node and Sass."
						projectLive="https://open-chat-app-2021.web.app/"
						projectPic={openchat}
					/>
					<Project
						theme={theme}
						projectName="BargainBuy - MERN"
						projectGitLink="https://github.com/RioterTrov97/bargainbuy-backend"
						projectDesc="This is a full stack ecommerce MERN application with paypal integration. Developed with MongoDB, Express, React, Redux, and Node."
						projectLive="https://bargainbuy.herokuapp.com/"
						projectPic={bargainbuy}
					/>
					<Project
						theme={theme}
						projectName="Netflix Trailer"
						projectDesc="Netflix Trailer is a web app that I created where people can watch movie trailers. Developed with React, Redux, TMDB api, and Firebase."
						projectGitLink="https://github.com/RioterTrov97/netflix-clone"
						projectLive="https://netflix-clone-ebf41.web.app/"
						projectPic={netflix}
					/>
					<Project
						theme={theme}
						projectName="Portfolio - MERN"
						projectGitLink="https://github.com/RioterTrov97/portfolio-site-2021"
						projectDesc="The portfolio app is my personal project that displays my cabailities as a web dev. Developed with love using React, Node and Express."
						projectLive="https://portfolio-site-2021.web.app/"
						projectPic={portfolio}
					/>
				</div>
			</div>
		</section>
	);
}

export default Projects;
