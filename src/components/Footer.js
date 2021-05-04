import React from 'react';
import dr_logo from '.././images/dr_logo.png';
import phone_call from '.././icons/phone_call.png';
import envelope from '.././icons/envelope.png';

export class Footer extends React.Component {
	render() {
	return(
		<div className='pt-20 bg-black-light h-auto'>
			<div className='flex flex-row m-auto'>
				<div className='flex-1'></div>
				<div className='flex-none'>
					<img src={ dr_logo } alt ='logo' className= 'mx-auto' />
						<div className='flex flex-row '>
							<img src={envelope} alt='envelope'  className= 'filter brightness-0 invert h-8 p-1 pr-2 float-left' />
							<p className='text-left text-white text-xl' >daverillera@gmail.com</p>
						</div>
						<div className='flex flex-row'>
							<img src={phone_call} alt='phone_call' className= 'filter brightness-0 invert h-8 p-1 pr-2 float-left' />
							<p className='text-left text-white text-xl' >(240) 645-2739</p>
						</div>
				</div>
				<div className='flex-1'></div>
			</div>
			<div className='md:flex p-4 h-16 bg-purple mt-5 sm:hidden'>
				<ul className='w-4/5 m-auto text-center '>
					<a href='/home' className='m-auto p-8 text-white text-md'>HOME</a>
					<a href='/about' className='m-auto p-8 text-white text-md'>ABOUT</a>
					<a href='/contact' className='m-auto p-8 text-white text-md'>CONTACT</a>
					<a href='/resume' className='m-auto p-8 text-white text-md'>RESUME</a>
				</ul>
			</div>
		</div>
		);
	}
}

