import React from 'react';
import './Resume.css';

const Resume = props => {
	return(
		<div className='resume_body p-8 md:bg-fixed sm:bg-local' >
			<h1 className= 'text-4xl bg-black opacity-90 px-8 font-bold text-left pb-8' >JOB EXPERIENCE</h1>
			<div className= 'flex bg-black opacity-90 px-4 pb-16'>
				<div className= 'flex-1'>
					<h2 className= 'text-white text-2xl text-left leading-loose underline' >GoDaddy</h2>
					<h3 className= 'text-lg text-grey' >October 2019 - November 2020</h3>
					<h4 className='text-lg font-semibold pb-4'>Project Manager / Web Specialist 2</h4>
					<li>Conduct initial consultation with new clients to gather information for their new website/logo design along with setting expectations for the new project.</li>
					<li>Schedule appointments for revisions/changes to their website/logo design.</li>
					<li>Work with the builder team with revisions to avoid process inefficiencies.</li>
					<li>Conduct a final review with the client prior to website launch.</li>
					<li>Manage 20-40 projects a month while taking 4-7 phone calls a day for new clients.</li>
					<li>Control calls to ensure call time stays within the allotted scheduled time and no appointments are missed or start late.</li>
					<br />
					<h2 className= 'text-white text-2xl text-left leading-loose underline' >Endurance International Group</h2>
					<h3 className= 'text-lg text-grey' >June 2017 - June 2018</h3>
					<h4 className='text-lg font-semibold pb-4'>WordPress Developer</h4>
					<li>Create the website layout and functionality using in-house design resources.</li>
					<li>Conduct consultative orientations with new clients following a Full Service Design package sale.</li>
					<li>Conduct site reviews with customers to present completed websites.</li>
					<li>Effectively assess the scope of the design project, educate customers on process, and set clear expectations to ensure on-time and in-budget delivery.</li>
					<li> troubleshoot and resolve template functionality issues.</li>
				</div>
				<div className= 'flex-1'>
					<h2 className= 'text-white text-2xl text-left leading-loose underline'  >West Press</h2>
					<h3 className= 'text-lg text-grey' >June 2018 - June 2019</h3>
					<h4 className='text-lg font-semibold pb-4'>Front End Developer</h4>
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
			<h1 className= 'text-4xl bg-black opacity-90 px-8 font-bold pb-8 text-left' >EDUCATION</h1>
			<div className= 'flex bg-black opacity-90 px-4 pb-16'>
				<div className= 'flex-1'>
					<h2 className= 'text-white text-2xl text-left leading-loose underline' >University of Maryland</h2>
					<h3 className= 'text-lg text-grey' >January 2011 - December 2016</h3>
					<h4 className='text-lg font-semibold'>Computer Science</h4>
				</div>
				<div className= 'flex-1'>
					<h2 className= 'text-white text-2xl text-left leading-loose underline' >Bethesda Chevy Chase High School</h2>
					<h3 className= 'text-lg text-grey' >August 2007 - June 2010</h3>
				</div>
			</div>
			<h1 className= 'text-4xl bg-black opacity-90 px-8 font-bold text-left pb-8' >MILITARY HISTORY</h1>
			<div className= 'flex bg-black opacity-90 px-4 pb-8'>
				<div className= 'flex-1'>
					<h2 className= 'text-white text-2xl text-left leading-loose underline' >Maryland Army National Guard</h2>
					<h3 className= 'text-lg text-grey' >April 2010 - April 2018</h3>
					<h4 className='text-lg font-semibold pb-4'>Sergeant/Medic/Combat Life Saver Instructor</h4>
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