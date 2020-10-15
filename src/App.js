import React, { Component } from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  sortProducts = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ size: event.target.value, product: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availabeSizes.index(event.target.value) >= 0
        ),
      });
    }
  };
  filterProducts(size) {}
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">CartItem</div>
          </div>
        </main>
        <footer>All right Reserved</footer>
      </div>
    );
  }
}
export default App;
