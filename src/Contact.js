import React, { useState } from 'react';
import emoji from './images/man_raising_hand.gif';
import './Contact.css';

function Contact({ theme }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [isNameActive, setIsNameActive] = useState(false);
	const [isEmailActive, setIsEmailActive] = useState(false);
	const [isSubjectActive, setIsSubjectActive] = useState(false);
	const [isMessageActive, setIsMessageActive] = useState(false);

	const handleName = (text) => {
		setName(text);

		if (text !== '') {
			setIsNameActive(true);
		} else {
			setIsNameActive(false);
		}
	};

	const handleEmail = (text) => {
		setEmail(text);

		if (text !== '') {
			setIsEmailActive(true);
		} else {
			setIsEmailActive(false);
		}
	};

	const handleSubject = (text) => {
		setSubject(text);

		if (text !== '') {
			setIsSubjectActive(true);
		} else {
			setIsSubjectActive(false);
		}
	};

	const handleMessage = (text) => {
		setMessage(text);

		if (text !== '') {
			setIsMessageActive(true);
		} else {
			setIsMessageActive(false);
		}
	};

	const handleForm = (e) => {
		e.preventDefault();
		alert('Form has been submitted');
	};

	return (
		<section
			id="contact"
			className={
				theme ? 'contactContainer' : 'contactContainer contactBlack'
			}>
			<div className="contactPage">
				<div
					className={
						theme
							? 'contactHeaderTitle'
							: 'contactHeaderTitle contactDarkText'
					}>
					<h5>Please say Hello!</h5>
					<img src={emoji} alt="" />
				</div>

				<p className={theme ? null : 'contactDarkText'}>
					Submit the form below so I can get back to you as soon as
					possible!
				</p>
				<div className="contactBody">
					<div className="submitLeft">
						<div id="float-label">
							<input
								id="full-name"
								type="text"
								className={theme ? null : 'contactDarkInput'}
								value={name}
								onChange={(e) => handleName(e.target.value)}
							/>
							<label
								htmlFor="full-name"
								className={isNameActive ? 'Active' : ''}>
								Full Name
							</label>
						</div>
						<div id="float-label">
							<input
								type="email"
								id="email"
								className={theme ? null : 'contactDarkText'}
								value={email}
								onChange={(e) => handleEmail(e.target.value)}
							/>
							<label
								htmlFor="email"
								className={isEmailActive ? 'Active' : ''}>
								E-mail
							</label>
						</div>
						<div id="float-label">
							<input
								type="text"
								id="subject"
								value={subject}
								onChange={(e) => handleSubject(e.target.value)}
							/>
							<label
								htmlFor="subject"
								className={isSubjectActive ? 'Active' : ''}>
								Subject
							</label>
						</div>
						<div id="float-label-textarea">
							<textarea
								type="text"
								id="message"
								className="contactMessage"
								value={message}
								onChange={(e) => handleMessage(e.target.value)}
							/>
							<label
								htmlFor="message"
								className={isMessageActive ? 'Active' : ''}>
								Message
							</label>
						</div>
						<button
							className="contactFormSubmit"
							onClick={(e) => handleForm(e)}>
							SUBMIT
						</button>
					</div>
					<div className="submitRight">
						<div
							className={
								theme
									? 'submitRightCard'
									: 'submitRightCard contactDarkCard'
							}>
							<h5
								className={
									theme
										? 'contactInfoHeading'
										: 'contactInfoHeading contactDarkText'
								}>
								MY DETAILS
							</h5>
							<p
								className={
									theme
										? 'contactInfoTitle'
										: 'contactInfoTitle contactDarkText'
								}>
								Phone
							</p>
							<p
								className={
									theme
										? 'contactInfoInfo'
										: 'contactInfoInfo contactDarkText'
								}>
								Mobile: 0420530881
							</p>

							<p
								className={
									theme
										? 'contactInfoTitle'
										: 'contactInfoTitle contactDarkText'
								}>
								Email
							</p>
							<p
								className={
									theme
										? 'contactInfoInfo'
										: 'contactInfoInfo contactDarkText'
								}>
								basnet.trovtle@gmail.com
							</p>

							<p
								className={
									theme
										? 'contactInfoTitle'
										: 'contactInfoTitle contactDarkText'
								}>
								Address
							</p>
							<p
								className={
									theme
										? 'contactInfoInfo'
										: 'contactInfoInfo contactDarkText'
								}>
								Sydney, NSW, Australia
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
