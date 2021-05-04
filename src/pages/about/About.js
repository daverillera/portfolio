import React from 'react';
import {button} from 'bootstrap';
import './About.css';
import {profile_pic, line3} from '../.././images';
import { css, git, react, wp, html2, sql } from '../.././brands';
import { HashLink as Link } from 'react-router-hash-link';

const About = props => {
	return(
		<div>
			<div className='abt_row sm:bg-fixed lg:flex flex-row'>
				<div className='sm:flex-col lg:flex-auto px-12'>
					<img className= 'rounded-full border-8 border-white mx-auto text-center' src={profile_pic} alt='about-img' />
					<h1 className= 'text-4xl text-white text-center' >Dave Rillera</h1>
					<h3 className= 'text-md text-center text-grey leading-relaxed pb-2'>FRONT-END DEVELOPER/DESIGNER</h3>
					<img src={line3} alt='decoration' height= '5px' className= 'm-auto w-1/4' />
				</div>
				<div className= 'sm:w-full px-auto  lg:pr-16 flex-grow'>
					<h1 className='text-white lg:text-6xl text-left sm:text-2xl' >ABOUT ME</h1>
					<p className='text-white text-lg p-10 bg-purple bg-opacity-75' >
					I am a front end developer with 4 years experience since moving to Arizona. 
					Prior to moving I attended The University of Maryland while interning at Jacobs 
					Federal Network Systems as a software developer programming in C++. 
					<br /><br />
					I moved to Arizona to gain a foundation for front end development at a coding bootcamp. 
					My main experience is in web design but I have a strong passion for front-end development. 
					All the experiences that I've gained molded me to produce fluid and responsive websites. 
					<br /><br />
					I take pride in being deatil oriendted and always appreciate recieving feedback from couleagues and clients.
					 I've worked with clients directly and indirectly, and I am comfortable working under pressure to complex specifications.
					<br /><br />
					<Link to="/resume">
					<button type="button" className='abt_btn' >VIEW RESUME</button>
					</Link>
					</p>
				</div>
			</div>
		</div>	
	);
}

export default About;