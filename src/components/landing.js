import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
import JUANS from './JUANS.png'
import juanspho from './juanspho.png'
class Landing extends Component{
    render() {
        return(
            <div>

<img src={JUANS}></img><img src={ juanspho}></img>

<Grid className="demo-grid-1">
        <Cell col={12} id='col1'></Cell>
</Grid>
     


        <Grid className="demo-grid-3">
        <Cell col={12} id='col3'>
            <div className="grid-3">
        <h3 >GREAT FAMILY ATMOSPHERE</h3>
        <h3 >DINE IN OR TAKEOUT</h3>
        </div>
<div className='hours'>
    <h4>Hours:
        Sun - Thur  11am - 9pm<br></br>
        Fri - Sat 11am - 10pm
    </h4>
</div>

        </Cell>
    </Grid>


            </div>
        )
    }
}


export default Landing;