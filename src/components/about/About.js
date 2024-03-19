import React from 'react';
import AboutItems from './AboutItems';
import ContactCard from '../contact-card/ContactCard';

import about from './about.json';

const About = () => {
	return (
		<div>
			<div
				className=''
				style={{
					backgroundImage: `url('https://res.cloudinary.com/dfxjyw2aq/image/upload/v1710336197/Albatross/Equipments/About_Us_styles_luyqcn.svg')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					width: '100%',
					height: '45vh',
				}}>
				<div className='flex flex-col justify-center items-center space-y-7 p-8 md:p-36 '>
					<h1 className='text-3xl md:text-5xl'>About Us</h1>
					<p className='px-8 md:px-36'>
						we're passionate about creating unforgettable audio visual
						experiences that captivate audiences and
						<br /> elevate events to new heights. With years of expertise in the
						industry, we have established ourselves as leaders <br />
						in delivering outstanding solutions that meet the unique needs of
						our clients.
					</p>
				</div>
			</div>
			<div>
				{about.map((about) => (
					<AboutItems
						key={about.id}
						about={about}
					/>
				))}
			</div>

			<div className='container mx-auto py-10 lg:py-32 flex justify-center'>
				<ContactCard />
			</div>
		</div>
	);
};

export default About;
