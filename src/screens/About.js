import React from 'react';
import { ReactComponent as GitHub } from '../images/github.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';
import { ReactComponent as Instagram } from '../images/instagram.svg';
import emoji from '../images/robot.gif';
import ApiImg from '../images/skills/Api.png';
import AwsImg from '../images/skills/Aws.png';
import DatabaseImg from '../images/skills/Database.png';
import FrameworksImg from '../images/skills/Frameworks.png';
import HtmlCssImg from '../images/skills/HtmlCss.png';
import LanguagesImg from '../images/skills/Languages.png';
import ReactImg from '../images/skills/React.png';
import TestingImg from '../images/skills/Testing.png';
import ToolsImg from '../images/skills/Tools.png';
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
							theme ? 'aboutHeading' : 'aboutHeading aboutDarkHeading'
						}>
						<p>I 💖 Software</p>
						<img src={emoji} alt="" />
					</div>
					<p className={theme ? 'aboutDesc' : 'aboutDesc aboutDarkText'}>
						Hi! I am Suman Basnet. I love combining the art of design with the
						art of programming. For me, programming is an art built on top of
						logic. Hence, I consider myself language agnostic as languages are
						tools, not areas or disciplines.
					</p>
					<p className={theme ? 'aboutDesc' : 'aboutDesc aboutDarkText'}>
						Whether it be just a chat or about projects, I'd love to hear from
						you. Please feel free to{' '}
						<span onClick={() => history.push('/#contact')}>contact me</span>.
					</p>
					<div className={theme ? 'aboutSocial' : 'aboutSocial aboutDarkText'}>
						<p>Lets connect on:</p>
						<div
							className={theme ? 'socialLinks' : 'socialLinks socialDarkSVG'}>
							<GitHub
								onClick={() => {
									window.open('https://github.com/RioterTrov97/');
								}}
							/>
							<Instagram
								onClick={() => {
									window.open('https://www.instagram.com/reactrove/');
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
							theme ? 'aboutResume' : 'aboutResume aboutDarkTextBorder'
						}
						onClick={() => {
							window.open(
								'https://www.canva.com/design/DAExo96q3XE/FzdRJawNRNeK848dRTZF0A/view?mode=prototype'
							);
						}}>
						View My Resume
					</div>
				</div>
				<div className="aboutPageRight">
					<div className={theme ? 'skillList' : 'skillList aboutskillBlack'}>
						<Skill
							theme={theme}
							skillImg={HtmlCssImg}
							skillLink="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
						/>
						<Skill
							theme={theme}
							skillImg={LanguagesImg}
							skillLink="https://www.javascript.com/"
						/>
						<Skill
							theme={theme}
							skillImg={ReactImg}
							skillLink="https://reactjs.org/"
						/>
						<Skill
							theme={theme}
							skillImg={TestingImg}
							skillLink="https://www.cypress.io/"
						/>
						<Skill
							theme={theme}
							skillImg={FrameworksImg}
							skillLink="https://expressjs.com/"
						/>
						<Skill
							theme={theme}
							skillImg={ApiImg}
							skillLink="https://graphql.org/"
						/>
						<Skill
							theme={theme}
							skillImg={ToolsImg}
							skillLink="https://git-scm.com/"
						/>
						<Skill
							theme={theme}
							skillImg={AwsImg}
							skillLink="https://aws.amazon.com/"
						/>
						<Skill
							theme={theme}
							skillImg={DatabaseImg}
							skillLink="https://redis.io/"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
