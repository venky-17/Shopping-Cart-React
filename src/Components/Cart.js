import React from "react";
import {

    Container, ListGroup, ListGroupItem, Button, CardHeader, CardBody, Card, CardFooter, Col, Row, 
} from "reactstrap"



const Cart =({cartItem, removeItem , buyNow})=> {

    let TotalAmount = 0;

    cartItem.forEach(item => {
        TotalAmount = parseFloat(TotalAmount) + parseFloat(item.price)
    })


    return (
        <Container fluid>
            <h1 className="text-success text-info">Your Cart</h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.ProductID}>
                    <Row>
                        <Col>
                            <img
                             height="80"
                             src= {item.image}
                             alt={item.name}
                            ></img>
                        </Col>
                        <Col className="text-center">
                            <p>{item.name}</p>
                            <p><strong>Price: ${item.price}</strong></p>
                            <Button color="danger" onClick={() => removeItem(item)}>Remove</Button>
                        </Col>
                    </Row>

                    </ListGroupItem>
                     ))}
            </ListGroup>
         
   
       
             {
  cartItem.length >= 1 ? (
    <Card className="text-center" mt="3">
      <CardHeader>  
         
      <CardHeader>
  <p>
    {cartItem.length === 1
      ? 
      `Grand Total for ${cartItem.length} item`
      : `Grand Total for ${cartItem.length} items`}
  </p>
</CardHeader>

        
      </CardHeader>


      <CardBody>{`Total Amount: $${TotalAmount.toFixed(2)}`}</CardBody>
      <CardFooter>
        <Button color="success" onClick={buyNow}>
          Pay Now
        </Button>
      </CardFooter>
    </Card>
  ) : (
    <h2 className="text-warning">Your Cart is Empty!!</h2>
  )
}

           
        </Container>
    )
  
}




export default Cart

