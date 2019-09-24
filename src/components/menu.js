import React, { Component } from 'react';
import {TableHeader, DataTable} from 'react-mdl'
import Layout from './layout'

class Menu extends Component {
    render() {
        return(
            <div>

<DataTable style={{backgroundColor:'lightgreen', fontSize:22,  color: 'red'}}
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

    <TableHeader name="name" tooltip="The amazing material name">Name</TableHeader>
    <TableHeader name="description" tooltip="The amazing material description">Description</TableHeader>
    <TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
</DataTable>



            </div>
        )
    }
}


export default Menu;