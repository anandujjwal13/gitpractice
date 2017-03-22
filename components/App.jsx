import React from 'react';
var Router = require('react-router');

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'anandujjwal13@gmail.com',
      name: 'New User'
    }
  }
  updateEmail(newEmail, newName) {
    this.setState({ email: newEmail, name: newName })
  }
  render() {
    //Router.browserHistory.push('/signin')
    return (
      <div className="blue full">
        {
          React.cloneElement(
            this.props.children,
            {
              email: this.state.email,
              name: this.state.name,
              updateEmail: this.updateEmail.bind(this)
            }
          )
        }
      </div>
    );
  }
}
