import { ChakraProvider, Container } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import React, { useEffect, useState } from "react";
import theme from "./theming/theme";

export const shoppingCartContext = React.createContext();
function App() {
  //manage cart
  const [cart, setCart] = useState([]);

  let localCart = localStorage.getItem("cart");

  //this is called on component mount, will set the localStorage cart in state if it exists.
  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);
  }, []); //the empty array ensures useEffect only runs once

  const addItem = (item, num) => {
    //create a copy of our cart state
    let cartCopy = [...cart];

    //destructuring id
    const { product_id } = item;

    //look for item in cart array
    let fetchItem = cartCopy.find(
      (cartItem) => cartItem.product_id === product_id
    );

    //if item already exists
    if (fetchItem) {
      fetchItem.quantity = fetchItem.quantity + num; //update item
    } else {
      //if item doesn't exist, add it and also add quantity
      item["quantity"] = num;
      cartCopy.push(item);
    }

    //update state
    setCart(cartCopy);

    //store cartCopy in localStorage
    let stringifiedCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringifiedCart);
  };

  const removeItem = (item, num) => {
    //create a copy of our cart state, avoid overwritting existing state
    let cartCopy = [...cart];
    //destrcutre id
    const { product_id } = item;

    //fetch the item using id
    let fetchItem = cartCopy.find(
      (cartItem) => cartItem.product_id === product_id
    );
    fetchItem.quantity = fetchItem.quantity - 1; //descrement the quantity
    setCart(cartCopy);

    //make cart a string and store in local space
    let stringifiedCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringifiedCart);
  };

  const deleteItem = (id) => {
    let cartCopy = [...cart];
    var index = cartCopy.findIndex(function (o) {
      return o.product_id === id;
    });
    if (index !== -1) cartCopy.splice(index, 1);
    setCart(cartCopy);

    //make cart a string and store in local space
    let stringifiedCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringifiedCart);
  };

  return (
    <ChakraProvider theme={theme}>
      <shoppingCartContext.Provider
        value={{
          cart,
          deleteItem,
          removeItem,
          addItem,
        }}
      >
        <Router>
          <Navbar />
          <Container maxW="container.xl">
            <Switch>
              <Route exact path="/">
                <Products />
              </Route>
              <Route exact path="/product/:id">
                <ProductDetails />
              </Route>
              <Route path="*">{Products}</Route>
            </Switch>
          </Container>
        </Router>
      </shoppingCartContext.Provider>
    </ChakraProvider>
  );
}

export default App;
