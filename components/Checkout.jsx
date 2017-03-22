import React from 'react';
import CheckoutProduct from './CheckoutProduct.jsx';
import { Link } from 'react-router';
import helperFuntion from '../helperFunction.js'

export default class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }
  componentDidMount() {
    helperFuntion.dynamicProduct(this.props.email)
      .then((data) => {
        this.setState({ cart: data })
      })
  }
  render() {
    let products = this.state.cart
    let size = 0
    let cost = 0
    const productsDom = products.map((product, index) => {
      product.quantity = 1
      size += product.quantity
      cost += product.quantity * product.price
      return <CheckoutProduct key={index} product={product} />
    })
    let container
    if (size === 0) {
      container = <div ref="container" id="container">
        <br/><br/><br/><br/><br/><br/><br/>
        <p className="showing">No Products to buy</p>
        <br/><br/><br/><br/><br/><br/><br/>
      </div>
    } else {
      container = <div ref="container" id="container">
        <p className="showing">Checking out {size} products</p>
        {productsDom}
        <span className="total-price"> Amount Payable : &#8377; {cost} </span>
        <div className="checkout-product">
          <Link to="/payment" className="add-to-cart" activeClassName="active">Place Order</Link>
        </div>
      </div>
    }
    return (
      <div className="blue">
        <div className="header">
          <h1 className="cartname">CHECK OUT</h1>
          <span className="username"> Hi, {this.props.name} </span>
          <Link className="logout" to="/signin" activeClassName="active">Logout</Link>
          <Link className="back" to="/cart" activeClassName="active">Back</Link>
        </div>
        {container}
      </div>
    );
  }
}