import React from 'react';
import './Intro.css';
import codingGuy from './images/coding-guy.png';
import emoji from './images/waving_hand.gif';
import { useHistory } from 'react-router';

function Intro({ theme }) {
	const history = useHistory();

	return (
		<section
			className={theme ? 'introContainer' : 'introContainer introBlack'}
			id="intro">
			<div className="introPage">
				<div className="introTop">
					<div className="introTopLeft">
						<div
							className={
								theme
									? 'introIntro'
									: 'introIntro introDarkBefore'
							}>
							<div className="introHeading">
								<p className={theme ? null : ' introDarkText'}>
									I am Suman Basnet
								</p>
								<img className="emoji" src={emoji} alt="" />
							</div>
							<p className={theme ? null : ' introDarkText'}>
								I am a passionate Web Developer.
							</p>
						</div>

						<div
							className={
								theme
									? 'introButtons'
									: 'introButtons introDarkText'
							}>
							<div
								className={
									theme
										? 'introButton'
										: 'introButton introDarkText introDarkTextBorder'
								}
								onClick={() => history.push('/#about')}>
								<h5>Read about me</h5>
							</div>

							<p>or</p>

							<div
								className={
									theme
										? 'introButton'
										: 'introButton introDarkText introDarkTextBorder'
								}
								onClick={() => history.push('/#projects')}>
								<h5>View Projects</h5>
							</div>
						</div>
					</div>

					<div className="programmerImage">
						<img src={codingGuy} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Intro;
