import React, {Component} from 'react';

import Carousel from 'react-bootstrap/Carousel'
  import './carsouel.css';
import './table.css' ;
import {Container, Row, Col, } from 'react-bootstrap'

 
class Bev extends Component{
    render() {
        return(
            <div>
<h1>BEVERAGES</h1>

<Container className='ccontainer'>
<div className='topDiv'>
  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name' >Soft Drinks</h4></Col>
    <Col sm={8} ><h4 className='descript'>Pepsi, Diet Pepsi, Toot Beer, Dr. Pepper, Lemonade, Mountian Dew, Sierra Mist</h4></Col>
    <Col sm={2} ><h4 className='price'>$2.75 / To Go $2.65</h4></Col>
  </Row>
  </div></div>
  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name'></h4></Col>
    <Col sm={8} ><h4 className='descript'>Strawberry Lemonaide</h4></Col>
    <Col sm={2} ><h4 className='price'>$3.20</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name' style={{fontSize:19}}>Juice ----(No Refills)</h4></Col>
    <Col sm={8} ><h4 className='descript'>Orange, Pineapple, Cranberry, Apple </h4></Col>
    <Col sm={2} ><h4 className='price'>$2.95</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name' style={{fontSize:19}}></h4></Col>
    <Col sm={8} ><h4 className='descript'>Coffee</h4></Col>
    <Col sm={2} ><h4 className='price'>$2.75</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name'></h4></Col>
    <Col sm={8} ><h4 className='descript'>Fresh Brewed Iced Tea</h4></Col>
    <Col sm={2} ><h4 className='price'>$2.75</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name' style={{fontSize:19}}></h4></Col>
    <Col sm={8} ><h4 className='descript'>Shirley Temple, or Roy Rodgers</h4></Col>
    <Col sm={2} ><h4 className='price'>$3.10</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name'>Jarritos -- (No Refills)</h4></Col>
    <Col sm={8} ><h4 className='descript'>Strawberry, Mandarin, Lime, Tamarindo</h4></Col>
    <Col sm={2} ><h4 className='price'>$3.20</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name'></h4></Col>
    <Col sm={8} ><h4 className='descript'>Mexican coca cola </h4></Col>
    <Col sm={2} ><h4 className='price'>$2.60</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name'></h4></Col>
    <Col sm={8} ><h4 className='descript'>Milk, Hot Chocolate (No Refills)</h4></Col>
    <Col sm={2} ><h4 className='price'>$2.70</h4></Col>
  </Row>
  </div>
 
</Container>

</div>
        )
    }
}


export default Bev;