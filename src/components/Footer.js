import React from 'react';
import '../styles/Footer.css';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useHistory } from 'react-router';

function Footer({ theme, isIntersectingContact }) {
	const history = useHistory();
	return (
		<div className="footerContainer">
			<div className="footer">
				<div
					className={`footerLeft ${
						isIntersectingContact ? 'blockFooterAnimation' : ''
					}`}>
					<div
						className="footerLeftIcon"
						onClick={() => history.push('/#contact')}>
						{!isIntersectingContact ? (
							<MailOutlineRoundedIcon className="mailIcon" />
						) : (
							<ArrowRightAltIcon className="mailIcon" />
						)}
					</div>
					<div
						className="footerLeftText"
						onClick={() => history.push('/#contact')}>
						<p>Contact me</p>
					</div>
				</div>
				<div className={theme ? 'footerRight' : 'footerRight footerBlackText'}>
					<p>SumanDesign2021®</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
