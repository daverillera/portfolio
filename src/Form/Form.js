import React from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA  from 'react-google-recaptcha';


export default function Form() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_phuxzjp', 'template_2o9h4pk', e.target, 'user_dsWRWqcP0sau4BSZjdecD', 'g-recaptcha-response' )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className="md:w-4/5 m-auto sm:w-full text-white flex-col">
    <form id="flex p-16" onSubmit={sendEmail} >
      <div className="form-group">
        <input placeholder='NAME' type="text" className="p-4 m-4 w-4/5 border-none text-white bg-white bg-opacity-10" name="name" />
      </div>
      <div className="form-group">
        <input placeholder= 'EMAIL' type="email" className="p-4 m-4 w-4/5 border-none text-white bg-white bg-opacity-10" name="email" aria-describedby="emailHelp" />
      </div>
      <div className="form-group">
        <textarea placeholder= 'message...' type="text" className="p-4 m-4 w-4/5 border-none text-white bg-white bg-opacity-10" rows="5" name="message" />
      </div>
      <br />
      <div className= 'flex' >
        <div className= 'flex-1' ></div>
        <div className= 'flex-initial'>
          <ReCAPTCHA
          sitekey="6LdN4sQaAAAAACce238Ir6ciFZYb00ns92McLo2l"
          onChange={onChange}
          />
        </div>
        <div className= 'flex-1' ></div>
      </div>
      <br />
      <input type="submit" value="Submit" className="text-white border-2 border border-white rounded-full text-lg p-2 w-32  bg-pink hover:bg-black-light"/>
    </form>
    </div>  
  );
}
