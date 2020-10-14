import React, { Component } from "react";
class Products extends Component {
  render(props) {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"#" + product._id}>
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                </a>
                <div className="product-price">{product.price}</div>
                <button className="button-primary">Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Products;
