import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Col, Row, CardImg, Button } from "reactstrap";
import CardItem from "./Cardtem"; 

const apiKey = "Your API KEY";
const realURL = "https://fakestoreapi.com/products/category/electronics";

const BuyPage = ({ addToCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    try {
      const { data } = await Axios.get(realURL);
      const productsArray = data.map(product => {
        const title = product.title;
        const productID = product.id;
        const image = product.image;
        const price = product.price;
        const rating = product.rating.rate;
        return { title, productID, image, rating, price }; 
      });
      setProduct(productsArray);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-center text-light">Best Laptops</h1>
      <Row xs="1" md="2" lg="3"> 
        {product.map(productItem => (
          <Col key={productItem.productID} className="mb-4">
            <CardItem productItem={productItem} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
