import React from 'react';
import ServiceItems from './ServiceItems';
import ContactCard from '../contact-card/ContactCard';
import imageText from '../../assets/sevice-text.svg';

import services from './services.json';

const Services = () => {
	return (
		<div className='mt-20'>
			<div>
				<div className='flex flex-col items-center space-y-7'>
					<h3>--- SERVICES ---</h3>
					<img
						src={imageText}
						alt='service-text'
					/>
					<p className='px-32'>
						We understand that no two events are alike. That's why we offer
						solutions designed to meet your specific needs and exceed your
						expectations. <br />
						Whether you're planning a corporate event, conference, concert, or
						private celebration, we're here to bring your vision to life with
						creativity, expertise,
						<br /> and unmatched attention to detail.
					</p>
				</div>
				<div className='flex flex-wrap p-8 md:p-20 justify-center'>
					{services.map((service) => (
						<ServiceItems
							key={service.id}
							service={service}
						/>
					))}
				</div>
			</div>
			<div className='container mx-auto py-10 lg:py-32 flex justify-center'>
				<ContactCard />
			</div>
		</div>
	);
};

export default Services;
