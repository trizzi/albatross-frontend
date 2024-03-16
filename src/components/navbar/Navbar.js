import React, { useState } from 'react';
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className='flex justify-between items-center min-h-0 relative shadow-md container mx-auto'>
			<div className='w-48 p-6'>
				<Image
					cloudName='dfxjyw2aq'
					publicId='https://res.cloudinary.com/dfxjyw2aq/image/upload/v1710241865/Albatross/Logo/nav-logo.svg'
				/>
			</div>

			<div
				className='px-8 cursor-pointer md:hidden text-white'
				onClick={toggle}>
				<i className='fas fa-bars'></i>
			</div>

			{isMenuOpen && (
				<div className='fixed top-0 left-0 w-full h-full bg-[#1d1d1e] opacity-90 z-50'>
					<div className='flex justify-end p-4'>
						<button
							onClick={toggle}
							className={`cursor-pointer text-gray-500 hover:text-gray-700 lg:hidden transition-transform transform ${
								isMenuOpen ? 'rotate-180' : 'rotate-0'
							}`}>
							<svg
								className='h-6 w-6 fill-current'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<title>Close</title>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M14.35 14.35a1 1 0 0 1-1.41 0L10 11.41l-2.94 2.94a1 1 0 1 1-1.41-1.41L8.59 10 5.65 7.06a1 1 0 0 1 1.41-1.41L10 8.59l2.94-2.94a1 1 0 0 1 1.41 1.41L11.41 10l2.94 2.94a1 1 0 0 1 0 1.41z'
								/>
							</svg>
						</button>
					</div>

					<ul
						className={`lg:flex ${
							isMenuOpen ? 'text-white text-center p-4' : 'hidden'
						}`}>
						<li className='hover:text-sky-600'>
							<Link
								to='/'
								smooth={true}
								duration={500}
								onClick={closeMenu}>
								Home
							</Link>
						</li>
						<li className='hover:text-sky-600'>
							<Link
								to='/about'
								smooth={true}
								duration={500}
								onClick={closeMenu}>
								About
							</Link>
						</li>
						{/* <li className='hover:text-sky-600'>
							<Link
								to='/services'
								smooth={true}
								duration={500}
								onClick={closeMenu}>
								Services
							</Link>
						</li> */}
						<li className='hover:text-sky-600'>
							<Link
								to='/equipments'
								smooth={true}
								duration={500}
								onClick={closeMenu}>
								Equipments
							</Link>
						</li>
					</ul>
				</div>
			)}

			<ul className='pr-8 md:flex hidden space-x-5 lg:space-x-16 items-center text-white'>
				<li className='hover:text-sky-600'>
					<Link to='/'>Home</Link>
				</li>
				<li className='hover:text-sky-600'>
					<Link to='about'>About</Link>
				</li>
				{/* <li className='hover:text-sky-600'>
					<Link to='/services'>Services</Link>
				</li> */}
				<li className='hover:text-sky-600'>
					<Link to='/equipments'>Equipments</Link>
				</li>

				<li className='mt-[-1rem]'>
					<Link to='/contact'>
						<Button
							text={'Contact'}
							background
						/>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
