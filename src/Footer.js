import React from 'react';
import './Footer.css';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import { useHistory } from 'react-router';

function Footer({ theme }) {
	const history = useHistory();
	return (
		<div className="footer">
			<div className="footerLeft">
				<div
					className="footerLeftIcon"
					onClick={() => history.push('/#contact')}>
					<MailOutlineRoundedIcon className="mailIcon" />
				</div>
				<div
					className="footerLeftText"
					onClick={() => history.push('/#contact')}>
					<p>Contact me</p>
				</div>
			</div>
			<div
				className={
					theme ? 'footerRight' : 'footerRight footerBlackText'
				}>
				<p>SumanDesign2021®</p>
			</div>
		</div>
	);
}

export default Footer;
