import React from 'react';
import './Home.css';
import { HashLink as Link } from 'react-router-hash-link';
import { button } from 'bootstrap';
import {cta_img, line2, site1, site2, site3, site4, dr_logo } from '../.././images';
import { css, git, html2, react, wp, sql } from '../.././brands';
import { link } from '../.././icons';

const Home = props => {
	return(
		<div className="bg-black-light text-white">
			<div  className="hero md:py-60 md:bg-fixed sm:py-24 bg-local" >
				<img src={dr_logo} alt='logo' className='m-auto' />
			</div>
			<div className='cta_row my-4 py-4 md:flex-row flex sm:flex-col bg-none'>
				<div className='flex-auto float-right '>
					<img src={cta_img} alt='devices' className='md:scale-75 sm:scale-50 mx-auto'  />
				</div>
				<div className='flex-auto m-auto' >
					<h2 className='text-center mb-4 md:text-5xl sm:text-2xl' >RESPONSIVE DESIGNS</h2>
					<p className='text-center md:text-xl p-2  sm:text-lg p-0'>
						Give your viewers an optimized browsing experience with <br />a fluid and flexible layout that adjusts according to their screen size. 
					</p>
					<Link to="#projects">
					  <button  className= 'flex text-white mx-auto border-2 border border-white rounded-full text-lg p-2' > LEARN MORE </button>
					</Link>
				</div>
			</div>
			<div className='home_body bg-fixed p-8' >
			<h2 className='text-6xl text-center mt-4 mb-28'>MY SKILLS</h2>
				<div className='flex max-h-60' >
					<div className='flex-1' >
						<img src={html2} alt="icon" className='xl:h-1/3 mx-auto sm:h-1/5' />
						<h3 className= 'text-2xl text-center'>HTML</h3>
						<img src={line2} alt='separator' className='w-16 mx-auto pt-2' />
						<p className= 'text-center text-xl hidden'>Dis aute irure dolor</p>
					</div>
					<div className='flex-1' >
						<img src={react}  alt="icon" className='xl:h-1/3 mx-auto sm:h-1/5' />
						<h3 className= 'text-2xl text-center'>REACT</h3>
						<img src={line2} alt='separator' className='w-16 mx-auto pt-2' />
						<p className= 'text-center text-xl hidden'>Dis aute irure dolor</p>

					</div>
					<div className='flex-1' >
						<img src={css} alt="icon" className='xl:h-1/3 mx-auto sm:h-1/5' />
						<h3 className= 'text-2xl text-center'>CSS</h3>
						<img src={line2} alt='separator' className='w-16 mx-auto pt-2' />
						<p className= 'text-center text-xl hidden'>Dis aute irure dolor</p>

					</div>
				</div>
				<div className='flex mt-0 max-h-60' >
					<div className='flex-1' >
						<img src={git} alt="icon" className='h-1/3 mx-auto' />
						<h3 className= 'text-2xl text-center' >GIT</h3>
						<img src={line2} alt='separator' className='w-16 mx-auto pt-2' />
						<p className= 'text-center text-xl hidden'>Dis aute irure dolor</p>

					</div>
					<div className='flex-1' >
						<img src={wp} alt="icon" className='h-1/3 mx-auto' />
						<h3 className= 'text-2xl text-center' >WP</h3>
						<img src={line2} alt='separator' className='w-16 mx-auto pt-2' />
						<p className= 'text-center text-xl hidden'>Dis aute irure dolor</p>

					</div>
					<div className='flex-1' >
						<img src={sql} alt="icon" className='h-1/3 mx-auto' />
						<h3 className= 'text-2xl text-center' >SQL</h3>
						<img src={line2} alt='separator' className='w-16 mx-auto pt-2' />
						<p className= 'text-center text-xl hidden'>Dis aute irure dolor</p>

					</div>
				</div>
				<h2 className='text-6xl text-center mt-4 mb-20' id="projects" >PREVIOUS PROJECTS</h2>
				<div className= 'flex xl:flex-row sm:flex-col'>
					<div className='flex-1'>
						<a href="https://hyve-technologies.com/">
						<img src={site4} alt="icon" className= 'float-left transform scale-75 ' />
						</a>
						<h3 className= 'text-2xl mt-16' >HYVE Technologies</h3>
						<p><strong>eCommerce</strong> <br />Custom design after market parts for GLocks and Smith & Wesson handguns.</p>
						<img src={link} alt="icon" className= 'filter brightness-0 invert h-5 float-left px-1' /
						><a href="https://hyve-technologies.com/" className= 'md:text-lg sm:text-base' >https://hyve-technologies.com/</a>
					</div>
					<div className='flex-1'>
						<a href="https://globalhsg.com/">
						<img src={site2} alt="icon" className= 'float-left transform scale-75 ' />
						</a>
						<h3 className= 'text-2xl mt-16' >Global Health Solutions Group</h3>
						<p>Health care resources provided </p>
						<img src={link} alt="icon" className= 'filter brightness-0 invert h-5 float-left px-1' />
						<a href="https://globalhsg.com/" className= 'md:text-lg sm:text-base' >https://globalhsg.com/</a>
					</div>
				</div>
				<div className= 'flex xl:flex-row sm:flex-col'>
					<div className='flex-1 '>
						<a href="https://scooter-stop.com/">
						<img src={site1} alt="icon" className= 'float-left transform scale-75 ' />
						</a>
						<h3 className= 'text-2xl mt-16' >Scooter Stop</h3>
						<p><strong>eCommerce</strong><br />Purchase, finance or rent scooters in South Carolina.</p>
						<img src={link} alt="icon" className= 'filter brightness-0 invert h-5 float-left px-1' />
						<a href="https://scooter-stop.com/" className= 'md:text-lg sm:text-base' >https://scooter-stop.com/</a>
					</div>
					<div className='flex-1'>
						<a href="https://chuckrenstrom.com/">
						<img src={site3} alt="icon" className= 'float-left transform scale-75 ' />
						</a>
						<h3 className= 'text-2xl mt-16' >Chuck Renstrom</h3>
						<p><strong>eCommerce</strong><br />Photography book of fossilized animals in Colorado.</p>
						<img src={link} alt="icon" className= 'filter brightness-0 invert h-5 float-left px-1' />
						<a href="https://chuckrenstrom.com/" className= 'md:text-lg sm:text-base' >https://chuckrenstrom.com/</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;