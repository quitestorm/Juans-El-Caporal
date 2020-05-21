import React, {Component} from 'react';
import {CardTitle, Card, CardActions, CardText, CardMenu, Button} from 'react-mdl'
import JUANS from './JUANS.png'



class About extends Component {
    render() {
        return(
            <div>

<img className='responsive' src={JUANS} alt='juans'></img>


 <Card shadow={0} style={{width: 'auto', margin: '10'}}>
    <CardTitle style={{color: 'red', height: '376px', background: 'url(https://s3-media2.fl.yelpcdn.com/bphoto/X5vmHXp5ah8_V1E1OTlZfA/o.jpg) center / cover'}}>Welcome</CardTitle>
     <CardText style={{backgroundColor: 'red', color:'red', width: 'auto'}}>
     <h3 className='Juans' style={{color:'red'}}>Juan’s El Caporal has long been the local’s favorite choice for Mexican food and a great place 
     to enjoy a drink. Locally owned and operated since 1986, Juan’s El Caporal  is locatedbetween Eagle Point and Shady Cove, 
     Oregon with plenty parking. Enjoy an authentic, traditional Mexican lunch or dinner  in our family friendly main dining room. 
     Planning a bash? Have a party or get-together with 
     a large group in our spacious banquet room (seats 50).  </h3>
     </CardText>
     <CardActions border>
         <a href= '/mainMenu'>
         <Button colored style={{backgroundColor: 'yellow', color:'red'}}>Main Menu</Button></a>
     </CardActions>
    <CardMenu style={{backgroundColor: 'red'}}>
       
    </CardMenu>
 </Card>



{/* <h1>Juan’s El Caporal is the best place to spend your leisure time tasting delicious food and enjoying the nice atmosphere. After visiting our restaurant you will definitely have a wish to come back!</h1> */}


            </div>
        )
    }
}


export default About;