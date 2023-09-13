import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import BuyPage from './Components/BuySection';
import Cart from './Components/Cart';

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (productItem) => {
    console.log("Adding to cart:", productItem);

    const isAlreadyPresent = cartItem.some((item) => item.productID === productItem.productID);
    if (isAlreadyPresent) {
      toast.error("Item already in Cart");
      return;
    } else {
      setCartItem(prevCart => [...prevCart, productItem]);
      toast(`Added ${productItem.title}`);
    }
  };

  const buyNow = () => {
    toast.success('Order Confirmed');
    setCartItem([]);
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((soloItem) => soloItem.productID !== item.productID));
    toast.error(`${item.title} removed from cart`);
  };

  return (
    <Container fluid>
      <ToastContainer />

      <Row>
        <Col md="9" className="pr-md-2">
          <BuyPage addToCart={addToCart} />
        </Col>
        <Col md="3" className="pl-md-2 border-left">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
