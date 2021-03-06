import React, { Component } from 'react';
import {TableHeader, DataTable} from 'react-mdl'
import Layout from './layout'
import ReactDataGrid from 'react-data-grid';
import { Container, Row, Col } from 'reactstrap';


class Menu extends Component{
    render() {
        return(
            <div>
<h1>SIDES</h1>




<DataTable style={{backgroundColor:'lightgreen',  fontSize:14.5, color: 'yellow '}}
    shadow={0}
    rows={[
     

        
        {name: 'Super Nachos', description:'Corn tortilia chips with choice of meat(chicken, beef, or shreded beef), beans,melted cheese, chopped tomatoes, onion, guaclomole`, and sour cream', price:  6.95},
        {name: 'Chicken Taquitos', description: 'Corn tortilia stuffed with chicken and cheese ', price: 6.95},
        {name: 'Mexican Quesadilo', description: 'Two soft flour tortilias stuffed with cheddar and monteray jack cheese, green onions, tomatoes, and your choiceoc chicken, beef, or shrdded beef', price: 6.95},
        {name: 'Vegetarian Nacho', description:'good', price: 2.90},
        {name: 'Plywood (Birch)', description: 50, price: 1.25},
        {name: 'Laminate (Gold on Blue)', description: 10, price: 2.35}
    ]}
>

    <TableHeader name="name" tooltip="The amazing material name">Name</TableHeader>
    <TableHeader name="description" tooltip="The amazing material description">Description</TableHeader>
    <TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
</DataTable>

            </div>
        )
    }
}


export default Menu;