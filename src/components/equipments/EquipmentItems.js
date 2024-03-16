import React from 'react';

const EquipmentItems = ({ equipment: { name, image } }) => {
	return (
		<div className='p-6 md:p-12 shadow-xl rounded-xl m-5 space-y-3 w-2/5'>
			<div className=''>
				<img
					src={image}
					alt='equipment'
					className=''
				/>
				<p className=''>{name}</p>
			</div>
		</div>
	);
};

export default EquipmentItems;
