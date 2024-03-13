import React from 'react';

const ServiceItems = ({ service: { name, icon, text } }) => {
	return (
		<div>
			<div>
				<div>
					<img
						src={icon}
						alt='service-images'
					/>
					<h1>{name}</h1>
				</div>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default ServiceItems;
