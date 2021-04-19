import React from 'react';
import './Footer.css';
import dr_logo from '.././images/dr_logo.png';
import phone_call from '.././icons/phone_call.png';
import envelope from '.././icons/envelope.png';
import { Link } from 'react-router-dom';

export class Footer extends React.Component {
	render() {
	return(
		<div className='ftr_row'>
			<div className='ftr_ctr'>
				<div className='ftr_ctr_col1'>
				</div>
				<div className='ftr_ctr_col2'>
				<img src={ dr_logo } alt ='logo' className= 'ftr_logo' />
				<p className='ftr_p'>
					<img src={envelope} alt='envelope'  className='icon' />
					daverillera@gmail.com
				</p>
				<p className='ftr_p'>
					<img src={phone_call} alt='phone_call' className='icon' />
					(240) 645-2739
				</p>
				</div>
				<div className='ftr_ctr_col3'>
				</div>
			</div>
			<div className='ftr_btm_bar'>
				<ul className='ftr_nav_ctr'>
					<Link to='/home' className='ftr_nav_itm'>HOME</Link>
					<Link to='/about' className='ftr_nav_itm'>ABOUT</Link>
					<Link to='/contact' className='ftr_nav_itm'>CONTACT</Link>
					<Link to='/resume' className='ftr_nav_itm'>RESUME</Link>
				</ul>
			</div>
		</div>
		);
	}
}

