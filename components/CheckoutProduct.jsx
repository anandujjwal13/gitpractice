import React from 'react';

export default class Product extends React.Component {
  updateCartDetails() {
    const updateFunction = this.props.update
    updateFunction(this.props.product)
  }

  render() {
    const productObject = this.props.product
    return (
      <div className="product-preview">
        <img className="img-checkout" src={productObject.image} alt={productObject.image} />
        <div className="other-details">
          <p className="title" >{productObject.name} </p>
          <span className="price">Price : &#8377; {productObject.price*productObject.quantity} </span>
          <span className="quantity"> Qty : {productObject.quantity}</span>
        </div>
      </div>
    );
  }
}