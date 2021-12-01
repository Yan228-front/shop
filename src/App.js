import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import ShopList from "./components/shop-list/ShopList";
import { products } from "./products";
import CartList from "./components/cart-list/CartList";

const updateCartList = (cartList, newProduct, index) => {
  if (newProduct.count === 0) {
    return [...cartList.slice(0, index), ...cartList.slice(index + 1)];
  }

  if (index === -1) {
    return [...cartList, newProduct];
  }

  return [
    ...cartList.slice(0, index),
    newProduct,
    ...cartList.slice(index + 1),
  ];
};

const updateProduct = (getProduct, productInCart, quantity) => {
  if (productInCart) {
    return {
      ...productInCart,
      totalPrice: productInCart.totalPrice + quantity * getProduct.price,
      count: productInCart.count + quantity,
    };
  }

  return {
    id: getProduct.id,
    name: getProduct.name,
    url: getProduct.url,
    totalPrice: getProduct.price,
    count: 1,
  };
};

class App extends React.Component {
  state = {
    cartList: [],
  };

  removeProductFromCart = (id) => {
    const { cartList } = this.state;

    this.setState(() => {
      const getProduct = products.find((product) => product.id === id);
      const getProductIndex = cartList.findIndex(
        (product) => product.id === id
      );
      const productInCart = cartList[getProductIndex];

      const newProduct = updateProduct(getProduct, productInCart, -1);
      const newArray = updateCartList(cartList, newProduct, getProductIndex);

      return {
        cartList: newArray,
      };
    });
  };

  deletePurchasedProduct = (id) => {
    const { cartList } = this.state;

    this.setState(() => {
      const getProduct = products.find((product) => product.id === id);
      const getProductIndex = cartList.findIndex(
        (product) => product.id === id
      );
      const productInCart = cartList[getProductIndex];

      const newProduct = updateProduct(
        getProduct,
        productInCart,
        -productInCart.count
      );
      const newArray = updateCartList(cartList, newProduct, getProductIndex);

      return {
        cartList: newArray,
      };
    });
  };

  addProductInCart = (id) => {
    const { cartList } = this.state;

    this.setState(() => {
      const getProduct = products.find((product) => product.id === id);
      const getProductIndex = cartList.findIndex(
        (product) => product.id === id
      );
      const productInCart = cartList[getProductIndex];

      const newProduct = updateProduct(getProduct, productInCart, 1);
      const newArray = updateCartList(cartList, newProduct, getProductIndex);

      return {
        cartList: newArray,
      };
    });
  };

  render() {
    return (
      <div className='.app'>
        <Navigation />
        <div>
          <Routes>
            <Route
              path='/'
              element={
                <ShopList
                  products={products}
                  addProductInCart={this.addProductInCart}
                />
              }
            />
            <Route
              path='/cart-list'
              exact
              element={
                <CartList
                  cartList={this.state.cartList}
                  addProductInCart={this.addProductInCart}
                  removeProductFromCart={this.removeProductFromCart}
                  deletePurchasedProduct={this.deletePurchasedProduct}
                />
              }
            />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
