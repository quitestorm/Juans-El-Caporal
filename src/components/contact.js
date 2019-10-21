import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
import Map from './map'
import JUANS from './JUANS.png'
import juanspho from './juanspho.png'
import juansaddr from './juansaddr.png'

import Grids from './Grid'

class Contact extends Component{
    render() {
        return(
            <div>
<h1>Contact Us</h1>

<img className='responsive' src={JUANS}alt=''></img><img className='responsive'src={juansaddr}></img>

<img className='responsive' src={juanspho} alt=''></img>

<Grid className='responsive'className="demo-grid-1">
        <Cell col={12} id='col11'></Cell>
</Grid>
     


        <Grid className="demo-grid-3">
        <Cell col={12} id='col3'> <Map /></Cell>
    </Grid>






            </div>
        )
    }
}


export default Contact;