import React, {Component} from 'react';

import Carousel from 'react-bootstrap/Carousel'
  import './carsouel.css';
import './table.css' ;
import {Container, Row, Col, } from 'react-bootstrap'

 



class Dess extends Component{

 


    render() {
      
        return(
        
        
            <div>

<h1>DESSERTS</h1>

<div classname='carsouel' style={{height: 250, backgroundColor:'magenta', color:'cyan'}} className='respomsive' className='caradiv'>



<Carousel >
  <Carousel.Item>
    <img
      className="d-block w-80" className='carselPic'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcjXUev_o1qbUsnJBtKXDHcrGjrHs4WDhWO8LqPNzyj4Q6BZZL'
      alt="Sopapillas"
    />
    <Carousel.Caption style={{color:'cyan'}}>
      <h3>Sopapillas</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80" className='carselPic'
      src='data:image/jpeg;base64,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'
      alt="Flan"
    />

    <Carousel.Caption  style={{color:'cyan'}}>
      <h3>Flan</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80" className='carselPic'
      src='https://i2.wp.com/86lemons.com/wp-content/uploads/2014/08/FriedIceCream6.jpg'
      alt="Deep Fried Ice Cream"
    />

    <Carousel.Caption style={{color:'cyan'}}>
      <h3>Deep Fried Ice Cream</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>

      </div>

 
    

<Container className='ccontainer'>
<div className='topDiv'>
  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name'style={{fontSize:19}} >Sopapillas</h4></Col>
    <Col sm={8} ><h4 className='descript'></h4></Col>
    <Col sm={2} ><h4 className='price'>$1.25</h4></Col>
  </Row>
  </div></div>
  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name'>Flan</h4></Col>
    <Col sm={8} ><h4 className='descript'></h4></Col>
    <Col sm={2} ><h4 className='price'>$4.25</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name' style={{fontSize:19}}>Deep Fried Ice Cream</h4></Col>
    <Col sm={8} ><h4 className='descript'>Ascoop of ice ream frozen hard then rolled in cereal crummbs and apped in the deep fryer.  Served in a flour tortilla bowl and topped with strawberry sauce and whipped cream</h4></Col>
    <Col sm={2} ><h4 className='price'>$4.65</h4></Col>
  </Row>
  </div>


 
</Container>
            </div>
        )
    }
}


export default Dess;