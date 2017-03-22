import React from 'react';
const axios = require('axios')
import helperFuntion from '../helperFunction.js'
import { Link } from 'react-router';

export default class Payment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      cost: 0
    }
  }
  componentDidMount() {
    const that = this
    axios.get('http://10.31.194.91:3000/current')
      .then(function (response) {
        helperFuntion.dynamicProduct(response.data.email)
          .then((data) => {
            let cost = 0
            data.map((product, index) => {
              product.quantity = 1
              cost += product.quantity * product.price
              return 0
            })
            that.setState({ name: response.data.name, cost: cost })
          })
      })
  }
  render() {
    return (
      <div className="blue full">
        <h1 className="cartname">PAYMENT</h1>
        <div className='header-payment'>
          <Link className="logout" to="/signin" activeClassName="active">Logout</Link>
          <img className="paypal" src='https://virtocommerce.com/admin/assets/catalog/Paypal_code/paypal_2014_logo.png' alt="" />
          <img className="mastero" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2000px-MasterCard_Logo.svg.png' id='mastercard' alt="" />
        </div>
        <div className='header-body white'>
          <h1>Hi {this.state.name}!!</h1>
          <h1>Rs.{this.state.cost} has been debited from your account!!</h1>
          <h3>Happy shopping!!</h3>
        </div>
        <div className="pay white">
          <img className="" src='http://assets.horizoncreditunion.com.au/images/verified-by-visa.png' height='10%' width="10%" alt="" />
          <img className="" src='https://help.wirexapp.com/hc/article_attachments/206721009/LOGO-MASTERCARD.jpg' height='10%' width="10%" alt="" />
          <img className="" src='http://www.tbitechnologies.com/website-designing/assets/img/collection/norton.png' height='10%' width="10%" id='norton' alt="" />
          <img className="" src='https://ubi.electracard.com/ubi/images/RuPay_Logo_New.jpg' height='50%' width="20%" id='norton' alt="" />
        </div>
      </div>
    );
  }
}
