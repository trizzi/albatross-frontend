import React from 'react';
import ServiceItems from './ServiceItems';
import ContactCard from '../contact-card/ContactCard';
import imageText from '../../assets/sevice-text.svg';

import services from './services.json';

const Services = () => {
	return (
		<div>
			<div>
				<div>
					<h3>--- SERVICES ---</h3>
					<img
						src={imageText}
						alt='service-text'
					/>
					<p>
						We understand that no two events are alike. That's why we offer
						solutions designed to meet your specific needs and exceed your
						expectations. Whether you're planning a corporate event, conference,
						concert, or private celebration, we're here to bring your vision to
						life with creativity, expertise, and unmatched attention to detail.
					</p>
				</div>
				<div>
					{services.map((service) => (
						<ServiceItems
							key={service.id}
							service={service}
						/>
					))}
				</div>
			</div>
			<div>
				<ContactCard />
			</div>
		</div>
	);
};

export default Services;
