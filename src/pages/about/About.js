import React from 'react';
import {button} from 'bootstrap';
import './About.css';
import {profile_pic, line3} from '../.././images';
import { css, git, react, wp, html2, sql } from '../.././brands';

const About = props => {
	return(
		<div>
			<div className='abt_row'>
				<div className='abt_col1'>
					<img className= 'abt_img' src={profile_pic} alt='about-img' />
					<h1>Dave Rillera</h1>
					<h3>WEB DEVELOPER/DESIGNER</h3>
					<img src={line3} alt='decoration' height= '5px' width= '200px' />
					<div className= 'inner_row'>
					<img className='abt_icon' src= {css} alt='icon' height='40px' />
					<img className='abt_icon' src= {git} alt='icon' height='40px' />
					<img className='abt_icon' src= {html2} alt='icon' height='40px' />
					<img className='abt_icon' src= {react} alt='icon' height='40px' />
					<img className='abt_icon' src= {wp} alt='icon' height='40px' />
					<img className='abt_icon' src= {sql} alt='icon' height='40px' />
					</div>
				</div>
				<div className= 'abt_col2'>
					<h1>ABOUT ME</h1>
					<p className='abt_p' >
					At vero eos et accusamus et iusto odio dignissimos ducimus 
					qui blanditiis praesentium voluptatum deleniti atque corrupti 
					excepturi sint occaecati cupiditate non provident, similique 
					sunt in culpa qui officia deserunt mollitia animi, id est 
					laborum et dolorum fuga. Et harum quidem rerum facilis est 
					et expedita distinctio. <br /><br />Nam libero tempore, cum soluta nobis 
					est eligendi optio cumque nihil impedit quo minus id quod 
					maxime placeat facere possimus,omnis voluptas assumenda est, 
					omnis dolor repellendus. Temporibus autem quibusdam et aut 
					officiis debitis aut rerum necessitatibus saepe eveniet ut 
					et voluptates repudiandae sint et molestiae non recusandae. 
					<br /><br />Itaque earum rerum hic tenetur a sapiente delectus, ut aut 
					reiciendis voluptatibus maiores alias consequatur aut 
					perferendis doloribus asperiores repellat
					<br /><br />
					<button type="button" className='abt_btn' >VIEW RESUME</button>
					</p>
				</div>
			</div>
		</div>	
	);
}

export default About;