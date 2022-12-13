import React, { memo } from "react";
import "./Store.view.scss";
import axios from "axios";
import { Link } from 'react-router-dom';


export class  Store extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        const products = res.data;
        this.setState({ products });
        console.log(this.state.products);
      })
  }

  render() {   

    return (
      <div className="products">
        {
          this.state.products
            .map(product =>              
                <div key={product.id}  className="card">
                  <img src={product.image} alt={product.title}  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Price: {product.price}€</p>
                    <Link className="Nav-link btn btn-primary" to= { '/product/' + product.id }>Ver Producto</Link>
                  </div>
                </div>            
            )
        }
      </div>
    )
  };
}

export default memo(Store);