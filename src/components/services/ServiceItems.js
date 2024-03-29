import React from 'react';

const ServiceItems = ({ service: { name, icon, text } }) => {
	return (
		<div className='w-full md:w-2/5 p-6 md:p-12 shadow-xl rounded-xl m-5 space-y-3'>
			<div>
				<div className='flex flex-col'>
					<div className='flex justify-start'>
						<img
							src={icon}
							alt='service-images'
							className='w-28'
						/>
					</div>

					<h1 className='text-3xl xl:text-4xl font-black pb-4'>{name}</h1>
				</div>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default ServiceItems;
