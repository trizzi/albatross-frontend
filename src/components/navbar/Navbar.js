import React from 'react';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const Navbar = () => {
	return (
		<div className='flex justify-between items-center min-h-0 relative shadow-md container mx-auto'>
			<div className='w-48 p-6'>
				<Image
					cloudName='dfxjyw2aq'
					publicId='https://res.cloudinary.com/dfxjyw2aq/image/upload/v1710241865/Albatross/Logo/nav-logo.svg'
				/>
			</div>
			<div>
				<ul className='pr-8 md:flex space-x-5 lg:space-x-16 items-center text-white'>
					<li className='hover:text-gray-400'>
						<Link to='/'>Home</Link>
					</li>
					<li className='hover:text-gray-400'>
						<Link to='about'>About</Link>
					</li>
					<li className='hover:text-gray-400'>
						<Link to='/services'>Services</Link>
					</li>
					<li className='hover:text-gray-400'>
						<Link to='/equipments'>Equipments</Link>
					</li>
					<li className='mt-[-1rem]'>
						<Button
							text={'Contact'}
							background
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
