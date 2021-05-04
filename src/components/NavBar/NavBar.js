import React from 'react';
import { Link } from 'react-router-dom';
import dr_logo from '../.././images/dr_logo.png'


const NavBar = () => {
	return (
		<div className='flex bg-black-light'>
			<div className='flex-1'>
				<Link to='/home'>
					<img src={dr_logo} alt='logo' className='h-28' />
				</Link>
			</div>
			<div className='flex-shrink'>
				<ul className='text-right pt-8 sm: p-4'>
					<Link to='/home' className='m-auto p-8 text-white text-lg'>HOME</Link>
					<Link to='/about' className='m-auto p-8 text-white text-lg'>ABOUT</Link>
					<Link to='/contact' className='m-auto p-8 text-white text-lg'>CONTACT</Link>
					<Link to='/resume' className='m-auto p-8 text-white text-lg'>RESUME</Link>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;