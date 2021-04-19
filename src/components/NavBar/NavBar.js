import React from 'react';
import { Link } from 'react-router-dom';
import dr_logo from '../.././images/dr_logo.png'
import './NavBar.css';

const NavBar = () => {
	return (
		<div className='nav_row'>
			<div className='nav_col_1'>
				<Link to='/home'>
					<img src={dr_logo} alt='logo' className='nav_img' />
				</Link>
			</div>
			<div className='nav_col_2'>
				<ul className='nav_ctr'>
					<Link to='/home' className='nav_itm'>HOME</Link>
					<Link to='/about' className='nav_itm'>ABOUT</Link>
					<Link to='/contact' className='nav_itm'>CONTACT</Link>
					<Link to='/resume' className='nav_itm'>RESUME</Link>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;