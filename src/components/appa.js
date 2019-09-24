import React, {Component} from 'react';
import Carousels from './carousel';
import Menu from './menu'
import {TableHeader, DataTable} from 'react-mdl'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';




 



class Appa extends Component{




    render() {


        
        return(

            <div>


<h1>APPATIZERS</h1>

<Carousels />




<Menu />









            </div>
        )
    }
}


export default Appa;