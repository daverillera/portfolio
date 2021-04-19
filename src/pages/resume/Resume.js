import React from 'react';
import './Resume.css';

const Resume = props => {
	return(
		<div className='resume_body' >
			<h1 className= 'sec_title' >JOB EXPERIENCE</h1>
			<div className= 'resume_row1'>
				<div className= 'resume_col1'>
					<h2 className= 'job_title' >GoDaddy</h2>
					<h3 className= 'sec_date' >Sales | October 2019 - November 2020</h3>
					<li>Provide consultation to customers regarding new products and services that will help their businesses succeed.</li>
					<li>Offer resolution within our scope of support (SOS), providing direction for third party resolution or consultation regarding a paid solution, as appropriate.</li>
					<li>Troubleshoot GoDaddy products as needed in order to deliver stellar customer service.</li>
					<li>Take full ownership of and provide a thorough resolution to customers.</li>
					<li>Meet metrics that could include but are not limited to Customer Availability, Net Promoter Score, and New Sales Per Day.</li>
					<li>Demonstrate extraordinary interpersonal skills and the ability to thrive, multi-task, and prioritize in a high-volume, dynamic environment.</li>
				</div>
				<div className= 'resume_col2'>
					<h2 className= 'job_title' >West Press</h2>
					<h3 className= 'sec_date' >Web Developer | June 2018 - June 2019</h3>
					<li>Managed all online inquiries.</li>
					<li>Maintained company website to aviod down time.</li>
					<li>Design, develop and manage client websites.</li>
					<li>Update client websites with new content/functionality.</li>
					<li>Produced proposals outlining project timeline, cost and project terms.</li>
					<li>Design and develop digital newsletters.</li>
					<li>Maintain constant contact with ongoing clients.</li>
					<li>Perform various IT duties with the department as needed.</li>
				</div>
			</div>
			<h1 className= 'sec_title' >EDUCATION</h1>
			<div className= 'resume_row1'>
				<div className= 'resume_col1'>
					<h2 className= 'job_title' >University of Maryland</h2>
					<h3 className= 'sec_date' >COMPUTER SCIENCE | January 2011 - December 2016</h3>
				</div>
				<div className= 'resume_col2'>
					<h2 className= 'job_title' >Bethesda Chevy Chase High School</h2>
					<h3 className= 'sec_date' >August 2007 - June 2010</h3>
				</div>
			</div>
			<h1 className= 'sec_title' >MILITARY HISTORY</h1>
			<div className= 'resume_row1'>
				<div className= 'resume_col1'>
					<h2 className= 'job_title' >Maryland Army National Guard</h2>
					<h3 className= 'sec_date' >Sergeant/Medic/Combat Lif Saver Instructor | April 2010 - April 2018</h3>
					<li>Conducted annual training to certify soldiers throughout the state in Combat Life Saving.</li>
					<li>Lead the management and allocation of medical supplies in the unit.</li>
					<li>Trained other medics in the unit on the clerical side of being a medic.</li>
					<li>Provided an open door policy to my team to address their professional and personal issues.</li>
				</div>
			</div>
		</div>
	);
};

export default Resume;