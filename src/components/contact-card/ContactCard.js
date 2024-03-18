import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const ContactCard = () => {
	const contactCardImage =
		'https://res.cloudinary.com/dfxjyw2aq/image/upload/v1710325308/Albatross/About%20page%20images/ALBATROSS_HOSTESS_NO_BG_1_zu2cje.svg';
	return (
		<div>
			<div
				className='flex justify-between items-center space-y-7 relative z-20'
				style={{
					backgroundImage: `url('https://res.cloudinary.com/dfxjyw2aq/image/upload/v1710326232/Albatross/About%20page%20images/Contact_me_vdlycw.svg')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					width: '100%',
					height: '50vh',
				}}>
				<div className='p-14 md:pl-32'>
					<h2 className='text-2xl md:text-4xl font-black pb-4'>
						Let’s Discuss how to <br />
						make your upcoming <br />
						event remarkable
					</h2>
					<p>
						Customer satisfaction is at the core of our business philosophy.{' '}
						<br />
						We build long-lasting relationships with our clients
					</p>
					<Link to='/contact'>
						<Button
							text={'Contact'}
							background
						/>
					</Link>
				</div>
				<div className='pr-32 hidden md:block'>
					<img
						src={contactCardImage}
						alt='Contact-Card-Images'
					/>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
