import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../button/Button';

const Contact = () => {
	const contactText =
		'https://res.cloudinary.com/dfxjyw2aq/image/upload/v1710608537/Albatross/Contact/Contact_1_oibu5g.svg';

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		const myForm = e.target;
		const formData = new FormData(myForm);

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString(),
		})
			.then(() => navigate('/thank-you/'))
			.catch((error) => alert(error));
	};

	return (
		<div>
			<div
				style={{
					backgroundImage: `url('https://res.cloudinary.com/dfxjyw2aq/image/upload/v1710336197/Albatross/Equipments/About_Us_styles_luyqcn.svg')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					width: '100%',
					height: '45vh',
				}}>
				<div className='flex flex-col justify-center items-center space-y-7 p-36 '>
					<h1 className='text-5xl'>Contact Us</h1>
					<p className='px-36'>We are available for you any time of the day.</p>
				</div>
			</div>
			<div className='flex flex-wrap md:flex-nowrap text-white w-full'>
				<div className='w-full p-12 md:p-32'>
					<img
						src={contactText}
						alt='Text'
					/>
				</div>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col py-20 px-32 w-full'>
					<div className='flex gap-4'>
						<label htmlFor='First Name'>
							Name
							<input
								type='text'
								id='first_name'
								name='first_name'
								className='mb-5 block w-60 rounded-md border-0 placeholder:text-gray-400focus:ring-2 focus:ring-inset focus:ring-sky-600 p-3 bg-slate-900 text-white'
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								placeholder='First Name'
							/>
						</label>
						<label htmlFor='Last Name'>
							Last Name
							<input
								type='text'
								id='last_name'
								name='last_name'
								className='mb-5 block w-60 rounded-md border-0 placeholder:text-gray-400focus:ring-2 focus:ring-inset focus:ring-sky-600 p-3 bg-slate-900 text-white'
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								placeholder='Last Name'
							/>
						</label>
					</div>

					<label htmlFor='Email'>
						Email
						<input
							type='text'
							id='email'
							name='email'
							className='mb-5 block w-[31rem] rounded-md border-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 p-3 bg-slate-900 text-white'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Email'
						/>
					</label>
					<label htmlFor='Message'>
						Message
						<textarea
							type='text'
							id='message'
							name='message'
							className='mb-5 block w-[31rem] rounded-md border-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 p-3 bg-slate-900 text-white'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder='Type Message ...'
						/>
					</label>
					<Link className=''>
						<Button
							text={'Send'}
							className='mt-4 text-white'
							background
							type='submit'
						/>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Contact;
