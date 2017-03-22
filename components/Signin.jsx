import React from 'react'
import helperFuntion from '../helperFunction.js'
import { browserHistory, Link } from 'react-router';

export default React.createClass({
  propTypes: {
    options: React.PropTypes.object,
    updateUser: React.PropTypes.func,
    onSubmit: React.PropTypes.func
  },
  onSubmit(e) {
    const email = this.refs.email.value
    //const passkey = this.refs.passkey.value
    const password = this.refs.password.value
    const that = this
    helperFuntion.signin(email, password)
      .then(function (data) {
        if (data !== false) {
          const name = data.name
          const email = that.refs.email.value
          that.props.updateEmail(email, name)
          browserHistory.push('/cart');
        } else {
          that.refs.email.value = ''
          that.refs.passkey.value = ''
          that.refs.password.value = ''
        }
      })
  },
  render() {
    let options = {
      email: {
        placeholder: 'Email'
      },
      password: {
        placeholder: 'Password'
      },
      submitButton: {
        text: 'Log In'
      }
    }
    options = Object.assign(options, this.props.options || {})
    return <div>
      <div className="signin-form">
        <div className="form-group">
          <input type="email" ref="email" className="form-control" placeholder={options.email.placeholder} />
        </div>
        <div className="form-group">
          <input type="password" ref="password" className="form-control" placeholder={options.password.placeholder} />
        </div>
        <div className="form-group">
          <input type="passkey" ref="passkey" className="form-control" placeholder="Cart Identification" />
        </div>
        <button type="submit" onClick={this.onSubmit} className="btn btn-default">{options.submitButton.text}</button>
      </div>
    </div>
  }
})

