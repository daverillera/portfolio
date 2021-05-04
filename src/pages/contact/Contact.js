import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Contact.css';
import {Form} from '../.././Form';

const Contact = props => {
	return(
		<div>
			<div className= 'contact_body bg-fixed p-4 pt-20 text-center' >
				<div className= 'flex '>
					<div className= 'md:flex-none w-32 sm:hidden' ></div>
					<div className= 'md:flex-grow sm:w-full' >
					<h1 className='md:text-4xl text-white sm:text-2xl' >GET IN TOUCH NOW</h1>
				<p className='text-lg text-white' >just send a brief description on how we can work together</p>
					<Form />
					</div>
					<div className= 'md:flex-none w-32 sm:hidden' ></div>
				</div>
			</div>
			<div className= 'contact_cta md:p-28 sm:text-center mt-12 p-4'>
			<h1 className= 'md:text-4xl text-white sm:text-lg '>HAVING A PERSONAL DEVELOPER AND DESIGNER JUST GOT EASIER</h1>
			<Link to="/resume">
			<button className= 'rounded-xl w-28 border-2 border-white text-white mt-4' >learn more...</button>
			</Link>
			</div>
		</div>
	);
};

export default Contact;