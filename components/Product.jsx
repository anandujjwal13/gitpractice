import React from 'react';

export default class Product extends React.Component {
  updateCartDetails() {
    const updateFunction = this.props.update
    updateFunction(this.props.product)
  }

  render() {
    const productObject = this.props.product
    //const requireImg = require('../../public/img/' + productObject.image)
    return (
      <div className="product-preview">
        <img src={productObject.image} alt={productObject.image} />
        <div className="other-details">
          <p className="title" >{productObject.name} </p>
          <p className="rating">{productObject.rating} ★</p>
          <p className="description"> {productObject.description}</p>
          <span className="price">Price : &#8377; {productObject.price} </span>
          <span className="quantity"> Qty : {productObject.quantity}</span>
        </div>
      </div>
    );
  }
}