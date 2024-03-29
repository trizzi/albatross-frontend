import React from 'react';

const AboutItems = ({ about: { name, images, text, icon, featured } }) => {
	return (
		<div className='flex flex-col w-full md:flex-row justify-between items-center py-10 md:px-44 md:py-20'>
			{!featured ? (
				<>
					<div className='p-16 md:p-0 md:w-1/2'>
						<img
							src={images}
							alt='About-images'
						/>
					</div>
					<div className='md:w-1/2 flex flex-col md:px-10'>
						<div className='flex pl-10 md:pl-0'>
							<img
								src={icon}
								alt='About-icons'
								className='w-20 h-20 object-cover'
							/>
							<h1 className='pt-1 mt-0'>{name}</h1>
						</div>
						<p className='px-16 md:px-0'>{text}</p>
					</div>
				</>
			) : (
				<>
					<div className='md:w-1/2 flex flex-col md:px-10'>
						<div className='flex pl-10 md:pl-0'>
							<img
								src={icon}
								alt='About-icons'
								className='w-20 h-20 object-cover'
							/>
							<h1 className='pt-2'>{name}</h1>
						</div>
						<p className='px-16 md:px-0'>{text}</p>
					</div>
					<div className='p-16 md:p-0 md:w-1/2 md:pl-14'>
						<img
							src={images}
							alt='About-images'
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default AboutItems;
