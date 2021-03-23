import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, withRouter } from 'react-router-dom';
import './Nav.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Button from '@material-ui/core/Button';
import diamondSvg from './images/diamond-dark-grey.svg';
import diamondDSvg from './images/diamond-white.svg';

function Nav({ theme }) {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [navLoc, setNavLoc] = useState('');
	const history = useHistory();

	useEffect(() => {
		const sections = document.querySelectorAll('section');

		const options = {
			root: null,
			rootMargin: '-50px 0px 0px 0px',
			threshold: 0.3,
		};

		const observer = new IntersectionObserver(function (entries) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setNavLoc(entry.target.id);
				}
			});
		}, options);

		sections.forEach((section) => {
			observer.observe(section);
		});
	}, []);

	const hamMenu = (
		<div
			className="navLinks"
			onClick={() => setToggleMenu((prevToggle) => !prevToggle)}>
			<div className={theme ? 'navLinkBox' : 'navLinkBox navLinkBlack'}>
				<ul>
					<NavLink
						to="/#intro"
						className={navLoc === 'intro' ? 'navActive' : null}>
						<p
							className={
								theme
									? null
									: navLoc === 'intro'
									? 'navDarkActive'
									: 'navDarkText'
							}>
							Intro
						</p>
					</NavLink>
				</ul>

				<ul>
					<NavLink
						to="/#about"
						className={navLoc === 'about' ? 'navActive' : null}>
						<p
							className={
								theme
									? null
									: navLoc === 'about'
									? 'navDarkActive'
									: 'navDarkText'
							}>
							About
						</p>
					</NavLink>
				</ul>

				<ul>
					<NavLink
						to="/#projects"
						className={navLoc === 'projects' ? 'navActive' : null}>
						<p
							className={
								theme
									? null
									: navLoc === 'projects'
									? 'navDarkActive'
									: 'navDarkText'
							}>
							Projects
						</p>
					</NavLink>
				</ul>

				<ul>
					<NavLink
						to="/#contact"
						className={navLoc === 'contact' ? 'navActive' : null}>
						<p
							className={
								theme
									? null
									: navLoc === 'contact'
									? 'navDarkActive'
									: 'navDarkText'
							}>
							Contact
						</p>
					</NavLink>
				</ul>
			</div>
		</div>
	);
	return (
		<div className={theme ? 'navContainer' : 'navContainer navBlack'}>
			<div className="navPage">
				<div
					className="navRight"
					onClick={() => history.push('/#intro')}>
					<object
						type="image/svg+xml"
						data={diamondSvg}
						className={theme ? 'navLogo' : 'navHide'}>
						svg-animation
					</object>
					<object
						type="image/svg+xml"
						data={diamondDSvg}
						className={theme ? 'navHide' : 'navLogo'}>
						svg-animation
					</object>
				</div>

				<div
					className="navText"
					onClick={() => history.push('/#intro')}>
					<h5
						className={
							theme ? 'navTextTop' : 'navTextTop navDarkText'
						}>
						Suman Basnet
					</h5>
					<p
						className={
							theme
								? 'navTextBottom'
								: 'navTextBottom navDarkText'
						}>
						Frontend Developer
					</p>
				</div>
				{toggleMenu && hamMenu}
				<div className="navPageRight">
					<nav className="navMenuItems">
						<ul>
							<NavLink
								to="/#intro"
								className={
									navLoc === 'intro' ? 'navActive' : null
								}>
								<p
									className={
										theme
											? null
											: navLoc === 'intro'
											? 'navDarkActive'
											: 'navDarkText'
									}>
									Intro
								</p>
							</NavLink>
						</ul>
						<ul>
							<NavLink
								to="/#about"
								className={
									navLoc === 'about' ? 'navActive' : null
								}>
								<p
									className={
										theme
											? null
											: navLoc === 'about'
											? 'navDarkActive'
											: 'navDarkText'
									}>
									About
								</p>
							</NavLink>
						</ul>
						<ul>
							<NavLink
								to="/#projects"
								className={
									navLoc === 'projects' ? 'navActive' : null
								}>
								<p
									className={
										theme
											? null
											: navLoc === 'projects'
											? 'navDarkActive'
											: 'navDarkText'
									}>
									Projects
								</p>
							</NavLink>
						</ul>
						<ul>
							<NavLink
								to="/#contact"
								className={
									navLoc === 'contact' ? 'navActive' : null
								}>
								<p
									className={
										theme
											? null
											: navLoc === 'contact'
											? 'navDarkActive'
											: 'navDarkText'
									}>
									Contact
								</p>
							</NavLink>
						</ul>
					</nav>
					<Button
						onClick={() =>
							setToggleMenu((prevToggle) => !prevToggle)
						}
						className="navButton">
						<MenuRoundedIcon className={theme ? "hamIcon" : "hamIcon darkHamIcon"} />
					</Button>
				</div>
			</div>
		</div>
	);
}

export default withRouter(Nav);
