import React from 'react';
import Button from '../button/Button';

const ContactCard = () => {
	const contactCardImage =
		'https://res.cloudinary.com/dfxjyw2aq/image/upload/v1710325308/Albatross/About%20page%20images/ALBATROSS_HOSTESS_NO_BG_1_zu2cje.svg';
	return (
		<div
			className='flex'
			style={{
				backgroundImage: `url('https://res.cloudinary.com/dfxjyw2aq/image/upload/v1710326232/Albatross/About%20page%20images/Contact_me_vdlycw.svg')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				width: '100%',
				height: '70vh',
			}}>
			<div>
				<h2>Let’s Discuss how to make your upcoming event remarkable</h2>
				<p>
					Customer satisfaction is at the core of our business philosophy. We
					build long-lasting relationships withn our clients
				</p>
				<Button
					text={'Contact'}
					background
				/>
			</div>
			<div>
				<img
					src={contactCardImage}
					alt='Contact-Card-Images'
				/>
			</div>
		</div>
	);
};

export default ContactCard;
