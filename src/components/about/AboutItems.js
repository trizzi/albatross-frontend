import React from 'react';

const AboutItems = ({ about: { name, images, text, icon } }) => {
	return (
		<div className='flex justify-between items-center px-44 py-20'>
			<div className='w-1/2'>
				<img
					src={images}
					alt='About-images'
				/>
			</div>
			<div className='w-1/2 flex flex-col px-10'>
				<div className='flex justify-start m-0 p-0'>
					<img
						src={icon}
						alt='About-icons'
					/>
					<h1 className='pt-2'>{name}</h1>
				</div>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default AboutItems;
