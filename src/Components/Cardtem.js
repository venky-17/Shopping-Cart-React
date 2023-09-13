import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from "reactstrap";

const CardItem = ({ productItem, addToCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg
        top
        src={productItem.image}
        alt={productItem.title}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <CardBody className="text-center">
        <CardTitle>
          <p>Product ID: {productItem.productID}</p>
        </CardTitle>

        <CardTitle>{productItem.title}</CardTitle>
        <CardText className="text-secondary">Price: ${productItem.price}</CardText>
        <CardText>Rating: {productItem.rating}</CardText>
        <Button color="success" onClick={() => addToCart(productItem)}>
          Add To Cart
        </Button>
      </CardBody>
    </Card>
  );
};

export default CardItem;
