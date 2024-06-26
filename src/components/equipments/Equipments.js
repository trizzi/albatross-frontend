import React from 'react';
import EquipmentItems from './EquipmentItems';
import ContactCard from '../contact-card/ContactCard';

import equipments from './equipments.json';

const Equipments = () => {
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
					<h1 className='text-3xl md:text-5xl'>Equipments</h1>
					<p className='px-4 md:px-36'>
						We believe that the right equipment is essential for creating
						unforgettable audio visual experiences. That's why we offer a
						comprehensive selection of state-of-the-art equipment designed to
						meet the needs of any event, big or small. Whether you're planning a
						corporate conference, music festival, wedding, or private party, we
						have everything you need to bring your vision to life.
					</p>
				</div>
			</div>
			<div className='flex flex-wrap p-8 md:p-20 justify-center'>
				{equipments.map((equipment) => (
					<EquipmentItems
						key={equipment.id}
						equipment={equipment}
					/>
				))}
			</div>
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
					<h1 className='text-3xl md:text-5xl'>All Available</h1>
					<p className='px-4 md:px-36'>
						We're proud to offer a wide range of top-of-the-line audio visual
						equipment available for hire. Whether you're planning a corporate
						event, wedding, concert, or private party, we have everything you
						need to create an unforgettable experience for you and your guests.
						From state-of-the-art sound systems and dazzling lighting effects to
						high-resolution projectors and interactive displays, we have the
						equipment to bring your vision to life.
					</p>
				</div>
			</div>

			<div className='container flex justify-center mx-auto py-10 lg:py-32 '>
				<ContactCard />
			</div>
		</div>
	);
};

export default Equipments;
