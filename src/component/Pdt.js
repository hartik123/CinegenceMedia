import React from 'react';
import './Pdt.css';
import {Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';

const Pdt = (props) => {
    const {product} = props;
    return (
        
        <div class="container">

                 {/* <a href="../pages/Product.js" >
                    <img src="/images/avengers.jfif" alt="avtar" class="image" style={{width: "100%"}} />
                    <div class="middle">
                    <div class="text">Movie No.1</div>
                    </div>
                 </a> */}

                {/* <img src={product.img} alt="avtar" class="image" style={{width: "100%"}} />
                <div class="middle">
                    <div class="text">{product.moviename}</div>
                </div> */} 
                
                <Card style={{ width: '13rem', height: "36rem" }}>
  <Card.Img variant="top" src="/images/avengers.jfif" />
  <Card.Body style={{color: "black"}}>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" styke={{width: "50px"}}>Go somewhere</Button>
  </Card.Body>
</Card>

            </div>
       
    )
}

export default Pdt;
