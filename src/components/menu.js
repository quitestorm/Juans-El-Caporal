import React, { Component } from 'react';
import {TableHeader, DataTable} from 'react-mdl'
import Layout from './layout'
import ReactDataGrid from 'react-data-grid';
import { Container, Row, Col } from 'reactstrap';


const columns = [
    {key: "name", name: "Name"},
    {key: "description", name: "Description"},    
    {key: "price", name: "Price"}       
    ]

const rows = [

        
    {name: 'Super Nachos', description:'Corns, tortilia chips with choice of meat(chicken, beef, or shreded beef), beans,melted cheese, chopped tomatoes, onion, guaclomole`, and sour cream', price:  6.95},
    {name: 'Chicken Taquitos', description: 'Corn tortilia stuffed with chicken and cheese ', price: 6.95},
    {name: 'Mexican Quesadilo', description: 'Two soft flour tortilias stuffed with cheddar and monteray jack cheese, green onions, tomatoes, and your choiceoc chicken, beef, or shrdded beef', price: 6.95},
    {name: 'Vegetarian Nacho', description:'Corn tortilla chips, covered with pinto beans, cheese, tomatoes, onions, sour cream and guacamole', price: 7.55},
    {name: 'Jalapeno Poppers', description: 'Cream cheese mounded high on half of a jalapeno popper then covered with a delicate potato bredding.  Served with hot sauce', price: 1.25},
    {name: 'Fajita Quesadilla', description:'Flour tortillas', price: 2.35}

]



class Menu extends Component {


   
    render() {
        return(
            <div>

(<ReactDataGrid className='responsive' 
  columns={columns}
  rowGetter={i => rows[i]}
  rowsCount={3}
  minHeight={150} 
  
  />);



{/* <DataTable className='responsive' style={{backgroundColor:'lightgreen', fontSize:22,  color: 'red',width:10}}
    shadow={0}
    rows={[
     

        
        {name: 'Super Nachos', description:'Corn tortilia chips with choice of meat(chicken, beef, or shreded beef), beans,melted cheese, chopped tomatoes, onion, guaclomole`, and sour cream', price:  6.95},
        {name: 'Chicken Taquitos', description: 'Corn tortilia stuffed with chicken and cheese ', price: 6.95},
        {name: 'Mexican Quesadilo', description: 'Two soft flour tortilias stuffed with cheddar and monteray jack cheese, green onions, tomatoes, and your choiceoc chicken, beef, or shrdded beef', price: 6.95},
        {name: 'Vegetarian Nacho', description:'Corn tortilla chips, covered with pinto beans, cheese, tomatoes, onions, sour cream and guacamole', price: 7.55},
        {name: 'Jalapeno Poppers', description: 'Cream cheese mounded high on half of a jalapeno popper then covered with a delicate potato bredding.  Served with hot sauce', price: 1.25},
        {name: 'Fajita Quesadilla', description:'Flour tortillas', price: 2.35}
    ]}
>

    <TableHeader className='responsive'  name="name" tooltip="The amazing material name">Name</TableHeader>
    <TableHeader className='responsive'  name="description" tooltip="The amazing material description">Description</TableHeader>
    <TableHeader className='responsive'  numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
</DataTable> */}
{/* 
<div className='grid'>
<Container>
  <Row>
    <Col sm={3}>
     <colHeader>name</colHeader>
    
    </Col>
    <Col sm={7}>
    <colHeader>Description</colHeader>
    </Col>
    <Col sm={2}>
    <colHeader>Price</colHeader>
    </Col>
  </Row>

  <Row>
          <Col xs="3"><colHeader>name</colHeader>.col-3</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="3">.col-3</Col>
        </Row>



</Container> */}



</div>

            // </div>
        )
    }
}


export default Menu;