import React from 'react';
import imageText from '../../assets/about-text.svg';
import AboutItems from './AboutItems';
import ContactCard from '../contact-card/ContactCard';

import about from './about.json';

const About = () => {
	return (
		<div>
			<div>
				<h3>--- ABOUT US ---</h3>
				<img
					src={imageText}
					alt='about-text'
				/>
				<p>
					This will inspire, entertain, and connect people. With a focus on
					quality, reliability, and customer satisfaction, we're proud to be
					your trusted partner in bringing your audio visual dreams to life.
				</p>
			</div>

			<div>
				{about.map((about) => (
					<AboutItems
						key={about.id}
						about={about}
					/>
				))}
			</div>

			<div>
				<ContactCard />
			</div>
		</div>
	);
};

export default About;
