import React from "react";
import "./Product.view.scss";
import axios from "axios";

export default class Product extends React.Component {
  state = {
    product: [],
  };

  componentDidMount() {
    const id = window.location.href.split("/")[4];
    axios.get("https://fakestoreapi.com/products/" + id).then((res) => {
      const product = res.data;
      this.setState({ product });
    });
  }

  render() {    
    return (
      <div className="productInfo">
        <div className="image">
          <img src={this.state.product.image} alt={this.state.product.title} />
        </div>
        <div className="info">
          <p>{this.state.product.title}</p>
          <p>Price: {this.state.product.price}€</p>
          <p>Category: <i>{this.state.product.category}</i></p>
          <p>{this.state.product.description}</p>
        </div>
      </div>
    );
  }
}
