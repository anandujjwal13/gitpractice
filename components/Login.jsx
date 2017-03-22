import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1 className="cartname">GO CART</h1>
        <div className="carousel">
          <ul className="header">
            <li><IndexLink to="/signin" activeClassName="active">Sign In</IndexLink></li>
            <li><Link to="/signup" activeClassName="active">Sign up</Link></li>
          </ul>
          {
            React.cloneElement(
              this.props.children,
              {
                updateEmail: this.props.updateEmail
              }
            )
          }
          <Link to="/todo" className="add-to-cart make" activeClassName="active">Make a List before shopping?</Link>
        </div>
      </div>
    );
  }
}
