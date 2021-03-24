import React, { useState } from 'react';
import emoji from './images/man_raising_hand.gif';
import axios from 'axios';
import './Contact.css';
import { toast } from 'react-toastify';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

function Contact({ theme }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [isNameActive, setIsNameActive] = useState(false);
	const [isEmailActive, setIsEmailActive] = useState(false);
	const [isSubjectActive, setIsSubjectActive] = useState(false);
	const [isMessageActive, setIsMessageActive] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const [isError, setIsError] = useState(false);

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

	const instance = axios.create({
		baseURL: 'https://secure-plateau-52891.herokuapp.com/',
	});

	const data = {
		name,
		email,
		message,
		subject,
	};

	const resetData = () => {
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
	};

	const handleForm = (e) => {
		e.preventDefault();
		setIsLoading(true);

		if (!name || !email || !subject || !message) {
			setIsError(true);
			toast.warn('🙏 Please add all the details!', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setIsLoading(false);
			return;
		}

		instance.post('/send', data).then((response) => {
			setIsLoading(false);
			setIsSent(true);
			setIsError(false);
			if (response.data.status === 'success') {
				toast.info('🥰 Your message has been delivered!', {
					position: 'bottom-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				resetData();
			} else if (response.data.status === 'fail') {
				setIsLoading(false);
				toast.error('😭 Sorry, your message could not be delivered!', {
					position: 'bottom-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		});
	};

	const loadingModal = (
		<div className="loadingModal">
			<div class="loader">Loading...</div>
		</div>
	);

	const confirmMessageSent = (
		<div className="messageSent">
			<p>I have received your message. Thankyou 🥰</p>
			<button onClick={() => setIsSent(false)}>
				<CloseRoundedIcon />
			</button>
		</div>
	);

	const dataMissing = (
		<div className="messageSent errorMessage">
			<p>Please fill all the details below. 🙏</p>
			<button onClick={() => setIsError(false)}>
				<CloseRoundedIcon />
			</button>
		</div>
	);

	return (
		<section
			id="contact"
			className={
				theme ? 'contactContainer' : 'contactContainer contactBlack'
			}>
			{isLoading ? loadingModal : null}
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
						{isSent && confirmMessageSent}
						{isError && dataMissing}
						<div id="float-label">
							<input
								id="full-name"
								type="text"
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
								MY CONTACT DETAILS
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
