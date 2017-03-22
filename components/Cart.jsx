import React from 'react';
import Product from './Product.jsx';
import { Link } from 'react-router';
import helperFuntion from '../helperFunction.js'
const axios = require('axios')

export default class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }
  interval() {
    const that = this
    window.setInterval(function () {
      axios.get('http://10.31.194.91:3000/current')
        .then(function (response) {
          console.log(response.data.name)
          that.props.updateEmail(response.data.email, response.data.name)
          helperFuntion.dynamicProduct(response.data.email)
            .then((data) => {
              console.log('hey')
              if (that.refs.container)
                that.setState({ cart: data })
            })
            .catch((data)=>{
              console.log(data)
            })
        })
    }, 2000);
  }
  componentDidMount() {
    const that = this
    axios.get('http://10.31.194.91:3000/current')
      .then(function (response) {
        console.log(response.data.name)
        that.props.updateEmail(response.data.email, response.data.name)
        helperFuntion.dynamicProduct(response.data.email)
          .then((data) => {
            if (that.refs.container)
              that.setState({ cart: data })
          })
      })
    this.interval()
  }
  componentWillUnmount() {
    //window.clearInterval(this.interval());
  }
  render() {
    let products = this.state.cart
    let size = 0
    const productsDom = products.map((product, index) => {
      product.quantity = 1
      size += product.quantity
      return <Product key={index} product={product} />
    })
    let container
    if (size === 0) {
      container = <div ref="container" id="container">
        <br /><br /><br /><br /><br /><br />
        <p className="showing">No Products in cart</p>
        <br /><br /><br /><br /><br /><br />
      </div>
    } else {
      container = <div ref="container" id="container">
        <p className="showing">Showing {size} products</p>
        {productsDom}
        <div className="buy-product">
          <Link to="/checkout" className="add-to-cart" activeClassName="active">Checkout</Link>
        </div>
      </div>
    }
    return (
      <div className="blue">
        <div className="header">
          <h1 className="cartname">CART</h1>
          <span className="username"> Hi, {this.props.name} </span>
          <Link className="logout" to="/signin" activeClassName="active">Logout</Link>
          <Link to="/todo" className="add-to-cart make" style={{width:'40%', margin:'0'}} activeClassName="active">View To-buy list</Link>
        </div>
        {container}
      </div>
    );
  }
}