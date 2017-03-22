import React from 'react';
import { browserHistory } from 'react-router';
const axios = require('axios')

export default class Signup extends React.Component {
  submitForm() {
    const name = this.refs.name.value;
    const email = this.refs.email.value;
    const mobile = this.refs.mobile.value;
    const password = this.refs.password.value;
    axios.post('http://10.31.194.91:3000/signup', {
      name: name,
      email: email,
      mobile: mobile,
      password: password
    })
      .then(function (response) {
        if(response.data.email === email){
          browserHistory.push('/signin');
        }
      })
      .catch(function (error) {
        this.refs.name.password = ''
      })
  }
  render() {
    return (
      <div className='signin-form'>
         <div className="form-group">
        <input type='text' ref='name' className='name' placeholder='Name' required />
        </div>
        <div className="form-group">
        <input type='text' ref='email' className='email' placeholder='E-Mail' required />
        </div>
        <div className="form-group">
        <input type='text' ref='mobile' className='mobileNumber' placeholder='Mobile Number' required />
        </div>
        <div className="form-group">
        <input type='password' ref='password' className='password' placeholder='Password' required />
        </div>
        <button type='button' className="btn btn-default" value='create account' onClick={this.submitForm.bind(this)}> Sign Up</button>
      </div>
    );
  }
}