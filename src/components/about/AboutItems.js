import React from 'react';

const AboutItems = ({ about: { name, image, text, icon } }) => {
	return (
		<div>
			<div>
				<img
					src={image}
					alt='About-images'
				/>
			</div>
			<div>
				<div>
					<img
						src={icon}
						alt='About-icons'
					/>
					<h1>{name}</h1>
				</div>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default AboutItems;
