import React, {Component} from 'react';

import Carousel from 'react-bootstrap/Carousel'
  import './carsouel.css';
import './table.css' ;
import {Container, Row, Col, } from 'react-bootstrap'

 

class Bar extends Component{
    render() {
        return(
            <div>
<h1>BAR</h1>
<Container className='ccontainer'>
<div className='topDiv'>
  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name' >WINE</h4></Col>
    <Col sm={8} ><h4 className='descript'><ul> 
        <li><h4>White Zinfandel</h4></li>
        <li><h4>Chardonay</h4></li>
        <li><h4>Merlot</h4></li>
        </ul></h4></Col>
    <Col sm={2} ><h4 className='price'></h4></Col>
  </Row>
  </div></div>
  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name'  style={{fontSize:19}}>COCTAILS</h4></Col>
    <Col sm={8} ><h4 className='descript'><ul>
        <li><h4>Margaritas</h4></li>
        <li><h4>Pina Colada</h4></li>
        <li><h4>Tequlia Sunrise</h4></li>
        <li><h4>Long Island Iced Tea</h4></li>
        <li style={{fontSize:19}}>Loco-- 4rums, Orange,Pineapple Juice & Splash of Grenadine</li>
        
        </ul></h4></Col>
    <Col sm={2} ><h4 className='price'></h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name' style={{fontSize:19}}>Cervezas</h4></Col>
    <Col sm={8} ><h4 className='descript'>IMPORTS:  <ul>
        <li><h4>Corona</h4></li>
        <li><h4> Corona Light</h4></li>
        <li><h4> Dos XX Amber on Tap</h4></li>
        <li><h4> Pacifico on Tap </h4></li>
        <li><h4> Tecate</h4></li>
        <li><h4> Modelo Especial</h4></li>
        <li><h4> Negra Modelo</h4></li>
        </ul>
        </h4></Col>
    <Col sm={2} ><h4 className='price'></h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name' style={{fontSize:19}}></h4></Col>
    <Col sm={8} ><h4 className='descript'>DOMESTIC:  
    <ul>
        <li><h4>Bud Light</h4></li>
        <li><h4>Budwiser on Tap</h4></li>
        <li><h4>Coors Light on Tap</h4></li>
        <li><h4>Michelob Ultra</h4></li>
        </ul>
        </h4></Col>
    <Col sm={2} ><h4 className='price'></h4></Col>
  </Row>
  </div>

  <div className='name'>
<Row>
    <Col sm={2} ><h4 className='name'></h4></Col>
    <Col sm={8} ><h4 className='descript'>NON_ALCOHOLIC
    <ul><li><h4>O'Doul's</h4></li></ul></h4></Col>
    <Col sm={2} ><h4 className='price'></h4></Col>
  </Row>
  </div>

 
</Container>

            </div>
        )
    }
}


export default Bar;