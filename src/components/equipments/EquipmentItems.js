import React from 'react';

const EquipmentItems = ({ equipment: { name, image } }) => {
	return (
		<div className='shadow-xl rounded-xl m-5 space-y-3 md:w-2/5'>
			<div className='flex flex-col'>
				<img
					src={image}
					alt='equipment'
					className='md:w-full md:h-[40rem] object-cover'
				/>
				<p className='bg-gradient-to-tr from-blue-700 to-transparent p-4'>
					{name}
				</p>
			</div>
		</div>
	);
};

export default EquipmentItems;
