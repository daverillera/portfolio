import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { button } from 'bootstrap';
import {cta_img, line2, site1, site2, site3, site4 } from '../.././images';
import { css, git, html2, react, wp, sql } from '../.././brands';
import { link } from '../.././icons';

const Home = props => {
	return(
		<div>
			<div className='hero'>
				<h1 className='hero_header' >DAVE RILLERA</h1>
			</div>
			<div className='cta_row'>
				<div className='cta_col1'>
					<img src={cta_img} alt='devices' className='cta_img' height='250px' width='250px'/>
				</div>
				<div className='cta_col2'>
					<h2>RESPONSIVE DESIGNS</h2>
					<p className='home_p'>
						Dis aute irure dolor in reprehenderit in 
			        	voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
					</p>
					<Link to={'/about'}>
					  <button className= 'toAbout' > LEARN MORE </button>
					</Link>
				</div>
			</div>
			<div className='home_body'>
			<h2>MY SKILLS</h2>
				<div className='home_inner_row' >
					<div className='home_col1' >
						<img src={html2} alt="icon" height= '75px' /><h3 className= 'label'>HTML</h3><img src={line2} alt='separator' width= '50px' /><p className= 'home_p'>Dis aute irure dolor</p>
					</div>
					<div className='home_col2' >
						<img src={react}  alt="icon" height= '75px' /><h3 className= 'label'>REACT</h3><img src={line2} alt='separator' width= '50px' /><p className= 'home_p'>Dis aute irure dolor</p>

					</div>
					<div className='home_col3' >
						<img src={css} alt="icon" height= '75px' /><h3 className= 'label'>CSS</h3><img src={line2} alt='separator' width= '50px' /><p className= 'home_p'>Dis aute irure dolor</p>

					</div>
				</div>
				<br />
				<div className='home_inner_row2' >
					<div className='home_col4' >
						<img src={git} alt="icon" height= '75px' /><h3 className= 'label'>GIT</h3><img src={line2} alt='separator' width= '50px' /><p className= 'home_p'>Dis aute irure dolor</p>

					</div>
					<div className='home_col5' >
						<img src={wp} alt="icon" height= '75px' /><h3 className= 'label' >WP</h3><img src={line2} alt='separator' width= '50px' /><p className= 'home_p'>Dis aute irure dolor</p>

					</div>
					<div className='home_col6' >
						<img src={sql} alt="icon" height= '75px' /><h3 className= 'label' >SQL</h3><img src={line2} alt='separator' width= '50px' /><p className= 'home_p'>Dis aute irure dolor</p>

					</div>
				</div>
				<br />
				<h2 className= 'projects' >PREVIOUS PROJECTS</h2>
				<div className= 'home_inner_row3'>
					<div className='home_col7'>
						<img src={site4} alt="icon" className= 'site_image' />
						<h3 className= 'site_label' >HYVE Technologies</h3>
						<img src={link} alt="icon" height="20px" className= 'site_icon' /><a href="https://hyve-technologies.com/" className= 'site_link' >https://hyve-technologies.com/</a>
					</div>
					<div className='home_col8'>
						<img src={site2} alt="icon" className= 'site_image' /><h3 className= 'site_label' >Global Health Solutiions Group</h3>
						<img src={link} alt="icon" height="20px" className= 'site_icon' /><a href="https://globalhsg.com/" className= 'site_link' >https://globalhsg.com/</a>
					</div>
				</div>
				<div className= 'home_inner_row4'>
					<div className='home_col9'>
						<img src={site1} alt="icon" className= 'site_image' />
						<h3 className= 'site_label' >Scooter Stop</h3>
						<img src={link} alt="icon" height="20px" className= 'site_icon' /><a href="https://scooter-stop.com/" className= 'site_link' >https://scooter-stop.com/</a>
					</div>
					<div className='home_col10'>
						<img src={site3} alt="icon" className= 'site_image' /><h3 className= 'site_label' >Global Health Solutiions Group</h3>
						<img src={link} alt="icon" height="20px" className= 'site_icon' /><a href="https://chuckrenstrom.com/" className= 'site_link' >https://chuckrenstrom.com/</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;