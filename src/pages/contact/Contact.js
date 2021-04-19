import React from 'react';
import './Contact.css';
import { Form } from '../.././components/Form.js';

const Contact = props => {
	return(
		<div>
			<div className= 'contact_body' >
				<div className= 'contact_row'>
					<div className= 'cnt_col1' ></div>
					<div className= 'cnt_col2' >
					<h1>GET IN TOUCH NOW</h1>
				<p>just send a brief description on how we can work together</p>
					<Form />
					</div>
					<div className= 'cnt_col3' ></div>
				</div>
			</div>
			<div className= 'empty_space'></div>
			<div className= 'contact_cta'>
			<h1 className= 'contact_cta_heading'>HAVING A PERSONAL DEVELOPER AND DESIGNER<br />JUST GOT EASIER</h1>
			<button className= 'cta_btn' >learn more...</button>
			</div>
		</div>
	);
};

export default Contact;