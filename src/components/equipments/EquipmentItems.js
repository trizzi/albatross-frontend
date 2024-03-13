import React from 'react';

const EquipmentItems = ({ equipment: { name, image } }) => {
	return (
		<div>
			<div className=''>
				<img
					src={image}
					alt='equipment'
				/>
				<p>{name}</p>
			</div>
		</div>
	);
};

export default EquipmentItems;
