import React from 'react';
// import { Image } from 'cloudinary-react';

const Showcase = () => {
	const companyText =
		'https://res.cloudinary.com/dfxjyw2aq/image/upload/v1710251804/Albatross/Logo/Text_2_ysjtjh.svg';
	return (
		<div
			style={{
				backgroundImage: `url('https://res.cloudinary.com/dfxjyw2aq/image/upload/v1710238918/Albatross/Landing%20page%20images/Property_1_EQUIPMENT_1_1_kcyyfe.svg')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				width: '100%',
				height: '100vh',
			}}
			className='flex flex-col md:flex-row justify-center  md:container md:mx-auto items-center py-44 px-8'>
			<img
				src={companyText}
				alt='company text'
				className='flex justify-center items-center align-center'
			/>
		</div>
	);
};

export default Showcase;
