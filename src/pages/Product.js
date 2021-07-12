import React from 'react';
import {Card, Button} from 'react-bootstrap';

const Product = () => {

    
    return(
        <div style={{marginRight: "1rem"}}>
            
            <Card style={{ width: '13rem', height: "36rem" }}>
  <Card.Img variant="top" src="/images/avengers.jfif" />
  <Card.Body style={{color: "black"}}>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <a href="https://react-bootstrap.github.io/">
    <Button variant="primary" style={{width: "50px"}}>Go somewhere</Button>
    </a>
  </Card.Body>
</Card>
        </div>
    );
}

export default Product;



