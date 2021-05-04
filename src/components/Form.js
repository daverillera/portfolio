import React from 'react';
import axios from 'axios';


export class cForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3000/contact", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }
  
  render() {
    return(
      <div className="md:w-4/5 m-auto sm:w-full text-white">
        <form id="flex p-16" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <input placeholder='NAME' type="text" className="p-4 m-4 w-4/5 border-none text-white bg-white bg-opacity-10" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
              <input placeholder= 'EMAIL' type="email" className="p-4 m-4 w-4/5 border-none text-white bg-white bg-opacity-10" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
              <textarea placeholder= 'message...' className="p-4 m-4 w-4/5 border-none text-white bg-white bg-opacity-10" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="sm:m-auto rounded-full text-xl bg-pink text-white p-2 w-3/4 md:w-1/4" >Submit</button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}
	
