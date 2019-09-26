import React, {Component} from "react";
import { render } from "react-dom";
import // State or Local Processing Plugins
"@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow
} from "@devexpress/dx-react-grid-bootstrap4";

import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";

 



 class Grids extends Component {

    constructor(props) {
        super(props);

this.state = {



columns: [
    {name: 'name', title: 'Name'},
    {name: 'description', title: 'Description'},
    {name: 'price', title: 'Price'},
],

rows: [
    {name: 'Super Nachos', description:'Corn tortilia chips with choice of meat(chicken, beef, or shreded beef), beans,melted cheese, chopped tomatoes, onion, guaclomole`, and sour cream', price:  6.95},
    {name: 'Chicken Taquitos', description: 'Corn tortilia stuffed with chicken and cheese ', price: 6.95},
    {name: 'Mexican Quesadilo', description: 'Two soft flour tortilias stuffed with cheddar and monteray jack cheese, green onions, tomatoes, and your choiceoc chicken, beef, or shrdded beef', price: 6.95},
    {name: 'Vegetarian Nacho', description:'good', price: 2.90},
    {name: 'Plywood (Birch)', description: 50, price: 1.25},
    {name: 'Laminate (Gold on Blue)', description: 10, price: 2.35}


]



};


    }




     render() {

const {rows, columns} = this.state;


         return(


<div className= 'Grid'>

<Grid rows = {rows} columns = {columns}>
    <Table />
    <TableHeaderRow />
</Grid>

</div>







         )
     }
 }

 export default Grids;