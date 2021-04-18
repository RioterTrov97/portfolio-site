import React from 'react';
import { ReactComponent as GitHub } from '../images/github.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';
import { ReactComponent as Instagram } from '../images/instagram.svg';
import emoji from '../images/robot.gif';
import photoshop from '../images/photoshop-logo.png';
import reactLogo from '../images/React-Logo.png';
import '../styles/About.css';
import Skill from '../components/Skill';
import { useHistory } from 'react-router';

const About = ({ theme }) => {
	const history = useHistory();
	return (
		<section
			className={theme ? 'aboutContainer' : 'aboutContainer aboutBlack'}
			id="about">
			<div className="aboutPage">
				<div className="aboutPageLeft">
					<div
						className={
							theme
								? 'aboutHeading'
								: 'aboutHeading aboutDarkHeading'
						}>
						<p>JavaScript Developer </p>
						<img src={emoji} alt="" />
					</div>
					<p
						className={
							theme ? 'aboutDesc' : 'aboutDesc aboutDarkText'
						}>
						Hi! I am Suman Basnet. I love combining the art of
						design with the art of programming. I currently
						specialise in ReactJS and NodeJS due to its nature of
						being fast, scalable, and simple.
					</p>
					<p
						className={
							theme ? 'aboutDesc' : 'aboutDesc aboutDarkText'
						}>
						I will love to hear from you. Whether it's a project,
						job opportunity, or just a chat. Feel free to{' '}
						<span onClick={() => history.push('/#contact')}>
							contact me
						</span>
						.
					</p>
					<div
						className={
							theme ? 'aboutSocial' : 'aboutSocial aboutDarkText'
						}>
						<p>Lets connect on:</p>
						<div
							className={
								theme
									? 'socialLinks'
									: 'socialLinks socialDarkSVG'
							}>
							<GitHub
								onClick={() => {
									window.open(
										'https://github.com/RioterTrov97/'
									);
								}}
							/>
							<Instagram
								onClick={() => {
									window.open(
										'https://www.instagram.com/reactrove/'
									);
								}}
							/>
							<Linkedin
								onClick={() => {
									window.open(
										'https://www.linkedin.com/in/suman-basnet-89430a1a8/'
									);
								}}
							/>
						</div>
					</div>
					<div
						className={
							theme
								? 'aboutResume'
								: 'aboutResume aboutDarkTextBorder'
						}
						onClick={() => {
							window.open(
								'https://drive.google.com/file/d/1SyVLBBXuflnLQ8y5T_qqC_B3MSLfc3bC/view?usp=sharing'
							);
						}}>
						View My Resume
					</div>
				</div>
				<div className="aboutPageRight">
					<div
						className={
							theme ? 'skillList' : 'skillList aboutskillBlack'
						}>
						<Skill
							theme={theme}
							skillImg="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png"
							skillLink="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
						/>
						<Skill
							theme={theme}
							skillImg="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png"
							skillLink="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics"
						/>
						<Skill
							theme={theme}
							skillImg="https://wildcardcorp.com/image-repository/javascript-icon.png/@@images/image.png"
							skillLink="https://www.javascript.com/"
						/>
						<Skill
							theme={theme}
							skillImg={reactLogo}
							skillLink="https://reactjs.org/"
						/>
						<Skill
							theme={theme}
							skillImg="https://cdn.zapier.com/storage/blog/4ec8fc7dc3a75758a3913bab9e5a4fd8_2.500x278.png"
							skillLink="https://redux.js.org/"
						/>
						<Skill
							theme={theme}
							skillImg="https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png"
							skillLink="https://sass-lang.com/"
						/>
						<Skill
							theme={theme}
							skillImg="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png"
							skillLink="https://nodejs.org/en/"
						/>
						<Skill
							theme={theme}
							skillImg="https://i.pinimg.com/originals/43/4d/cf/434dcfe1acd79af48ddfc35292c31de5.png"
							skillLink="https://git-scm.com/"
						/>
						<Skill
							theme={theme}
							skillImg={photoshop}
							skillLink="https://www.adobe.com/au/products/photoshop.html"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
