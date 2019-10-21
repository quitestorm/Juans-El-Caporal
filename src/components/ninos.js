import React, {Component} from 'react';

 
import './table.css' ;
import {Container, Row, Col, } from 'react-bootstrap'

 



class Ninos extends Component{

 


    render() {
      
        return(
        
        
            <div>

<h1>NINOS</h1>


 
    

<Container className='ccontainer'>
<div className='topDiv'>
    <div className='name'>
<Row>
    <Col sm={4} ><h4 className='name' >Enchilada, Quesadilla, Mexican Pizza, Taco, Small burrito</h4></Col>
    <Col sm={6} ><h4 className='descript'>Served with Spanish rice, beans, and choice of cheese, beef, beans, chicken or picadillo.</h4></Col>
    <Col sm={2} ><h4 className='price'>$5.25</h4></Col>
  </Row>
  </div></div>
  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name'>Grilled Cheese Sandwich</h4></Col>
    <Col sm={8} ><h4 className='descript'>served with french fries</h4></Col>
    <Col sm={2} ><h4 className='price'>$6.95</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name' style={{fontSize:19}}>Carne Azada</h4></Col>
    <Col sm={8} ><h4 className='descript'></h4></Col>
    <Col sm={2} ><h4 className='price'>$6.95</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name' style={{fontSize:19}}>Enchilada de  Camaron</h4></Col>
    <Col sm={8} ><h4 className='descript'></h4></Col>
    <Col sm={2} ><h4 className='price'>$7.40</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name'>Kids Nachos</h4></Col>
    <Col sm={8} ><h4 className='descript'>Chips, beans, cheese, choice of chicken, ground beef, or shredded beef.</h4></Col>
    <Col sm={2} ><h4 className='price'>$6.10</h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name' style={{fontSize:19}}>Fajita Quesadilla</h4></Col>
    <Col sm={8} ><h4 className='descript'>Cround beef nachos, chicken taquitos, picadillo taquitos, cheese quesadilla, jalapeno poppers.  Garnished with tomatoes, onions, sour cream and guacamole</h4></Col>
    <Col sm={2} ><h4 className='price'>$5.25</h4></Col>
  </Row>
  </div>

 
</Container>

</div>






            
        )
    }
}


export default Ninos;