import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
import JUANS from './JUANS.png'
import juanspho from './juanspho.png'
import './landing.css';

import Grids from './Grid'












class Landing extends Component{
    render() {
        return(
            <div>

<img className='responsive' src={JUANS}></img><img className='responsive'  src={ juanspho}></img>

<Grid className="demo-grid-1">
        <Cell col={12} id='col1'></Cell>
</Grid>
     


        <Grid className="demo-grid-3">
        <Cell col={12} id='col3'>
            <div  className='responsive' className="grid-3">
        <p  style={{fontSize:32}} className='responsive' >GREAT FAMILY ATMOSPHERE</p>
        <p  style={{fontSize:32}} className='responsive'  >DINE IN OR TAKEOUT</p>
        </div>
<div  className='responsive' className='hours'>
    <h4>Hours:<br></br>
        Sun - Thur --> 11am - 9pm<br></br>
        Fri - Sat --> 11am - 10pm
    </h4>



</div>

        </Cell>
    </Grid>


            </div>
        )
    }
}


export default Landing;