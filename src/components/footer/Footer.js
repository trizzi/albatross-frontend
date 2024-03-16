import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Image } from 'cloudinary-react';
import FooterItem from './FooterItems';

import footer from './footer.json';

const Footer = () => {
	const theme = useTheme();
	return (
		<footer
			className='py-20min-h-0 w-full mt-20 relative'
			style={{ backgroundColor: theme.backgroundColor }}>
			<div className='md:flex container mx-auto md:p-12 relative z-20'>
				<div className='w-full md:w-1/3 flex flex-col p-8'>
					<div className='w-full min-h-0 flex items-center space-x-2'>
						<Image
							cloudName='dfxjyw2aq'
							publicId='https://res.cloudinary.com/dfxjyw2aq/image/upload/v1710238904/Albatross/Logo/ALBATROSS_LOGO_cu7xja.svg'
							className='w-12 h-12'
							alt='logo'
						/>
						<h2 className='text-4xl font-bold text-white my-5'>
							Albatross Services
						</h2>
					</div>
					<p>
						Whether you're planning a corporate event, wedding, concert, or
						private party, we have everything you need to create an
						unforgettable experience for you and your guests.
					</p>
					<small className='mt-6'>
						&copy; Albatross Services 2024. All rights reserved
					</small>
					<div className='flex space-x-2 pt-2 text-white '>
						<a
							href='https://www.linkedin.com/username'
							className='hover:text-sky-600'>
							<i className='fa-brands fa-linkedin-in'></i>
						</a>
						<a
							href='https://www.facebook.com'
							className='hover:text-sky-600'>
							<i className='fa-brands fa-facebook'></i>
						</a>
						<a
							href='https://www.twitter.com'
							className='hover:text-sky-600'>
							<i className='fa-brands fa-twitter'></i>
						</a>
						<a
							href='https://www.instagram.com'
							className='hover:text-sky-600'>
							<i className='fa-brands fa-instagram'></i>
						</a>
					</div>
				</div>

				<div className='flex w-full md:w-2/3 p-8 text-white'>
					{footer &&
						footer.map((category) => (
							<div
								className='w-full sm:w-1/2 md:w-1/3 flex md:justify-end mt-10 md:mt-0'
								key={category.title}>
								<FooterItem category={category} />
							</div>
						))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
