import React, {Component} from 'react';

import Carousel from 'react-bootstrap/Carousel'
  import './carsouel.css';
import './table.css' ;
import {Container, Row, Col, } from 'react-bootstrap'

 



class Toast extends Component{

 


    render() {
      
        return(
        
        
            <div>

<h1>lAS TOSTADAS</h1>

<div classname='carsouel' style={{height: 250, backgroundColor:'magenta', color:'cyan'}} className='respomsive' className='caradiv'>



<Carousel >
  <Carousel.Item>
    <img
      className="d-block w-80" className='carselPic'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MlyjRx2MsZ4rpMSq8r9aTS7Bh1pgz3o5sYx3VzKzH31rr72XPg'
      alt="Tostada"
    />
    <Carousel.Caption style={{color:'cyan'}}>
      <h3>Tostada</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80" className='carselPic'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_XegbZxAd-jpB4phsAkqzRIfjsa0TO6DAxOAzr2Ufy24FZSboA'
      alt="Thirdeee slide"
    />

    <Carousel.Caption  style={{color:'cyan'}}>
      <h3>Refried bean and Chicken</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80" className='carselPic'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRec2MZm65pnM16NauflWUcRIZ7W0HBQMvlX8YZUUpWa4bhr9OYMg'
      alt="Third slide"
    />

    <Carousel.Caption style={{color:'cyan'}}>
      <h3>Whole Pinto Bean</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-80" className='carselPic'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZ1XsQ-p_sxKHfJQLlIFsbMnoaNb7keXaBUnhLFYXcUq4BkyB'
      alt="Refried bean and Beef"
    />
    <Carousel.Caption style={{color:'cyan'}}>
      <h3>Refried bean and Beef</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80" className='carselPic'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTga2Q427r2ep8GUp9CN-w6_Z0wuPkND29a_g2VuktbR4MiBtB-g'
      alt="Third slide"
    />

    <Carousel.Caption style={{color:'cyan'}}>
      <h3>Refried Bean</h3>
      <p> </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80" className='carselPic'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfP2-5ZVncTdtEvIQHwhmL5h4h2CezDZWBCw2ZBrlz3IiQWjMYg'
      alt="Third slide"
    />

    <Carousel.Caption style={{color:'cyan'}}>
      <h3>Deluxe</h3>
      <p> </p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-80" className='carselPic'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPXuTMp3MZ-67YF1Ih-IQekOr2gso6Prcn-VV27YrqvMXUXmUDQ'
      alt="Third slide"
    />

    <Carousel.Caption style={{color:'cyan'}}>
      <h3>Avacado</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>


</Carousel>

      </div>

 
    

<Container className='ccontainer'>
<div className='topDiv'>
  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name' >Tostadas</h4></Col>
    <Col sm={7} ><h4 className='descript'>A deep fried corn tortilla topped with beans and meat, lettuce, cheese, and tomato</h4></Col>
    <Col sm={3} ><h4 className='price' style={{fontSize:19}}>add Guacamole $1.45 - add Sour Cream $1.00</h4></Col>
  </Row>
  </div></div>
  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name' style={{fontSize:19}}>Refried bean and Chicken or Picadillo Tostada</h4></Col>
    <Col sm={8} ><h4 className='descript'></h4></Col>
    <Col sm={2} ><h4 className='price'>$7.15</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name' style={{fontSize:19}}>Whole pinto bean Tostada</h4></Col>
    <Col sm={8} ><h4 className='descript'></h4></Col>
    <Col sm={2} ><h4 className='price'>$6.35</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name' style={{fontSize:19}}>Refried Bean and Beef Tostada</h4></Col>
    <Col sm={8} ><h4 className='descript'></h4></Col>
    <Col sm={2} ><h4 className='price'>$7.15</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name'>Refried Bean Tostada</h4></Col>
    <Col sm={8} ><h4 className='descript'></h4></Col>
    <Col sm={2} ><h4 className='price'>$6.35</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name' style={{fontSize:19}}>Deluxe Tostada</h4></Col>
    <Col sm={8} ><h4 className='descript'>Choice of chicken, beef, picadillo, or pork.  Served with sur cream and guacamole</h4></Col>
    <Col sm={2} ><h4 className='price'>$8.05</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name'>Avocado Tostada</h4></Col>
    <Col sm={8} ><h4 className='descript'>CChoice of chicken, beef or shredded beef topped with avocado slices and sour cream </h4></Col>
    <Col sm={2} ><h4 className='price'>$8.75</h4></Col>
  </Row>
  </div>

 

 
</Container>

            </div>
        )
    }
}


export default Toast;