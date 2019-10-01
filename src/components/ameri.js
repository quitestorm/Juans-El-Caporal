import React, {Component} from 'react';
import Menu from './menu'
import {TableHeader, DataTable} from 'react-mdl'
import Carousels from './carousel'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';


const items = [
    {
        src: '',
        altText: 'Slide 1',
        caption: 'Slide 1'
      },
    {
        src: '',
        altText: 'Slide 2',
        caption: 'Slide 2'
      },
    {
      src: '',
      altText: 'Slide 3',
      caption: 'Slide 3'
    },
    {
        src: '',
        altText: 'Slide 4',
        caption: 'Slide 4'
      },
    {
        src: '',
        altText: 'Slide 5',
        caption: 'Slide 5'
      },
    {
      src: '',
      altText: 'Slide 6',
      caption: 'Slide 6'
    },
  ];



class Ameri extends Component{

    

    render() {


        

        return(
            <div>
<h1>AMERICAN CUSISINE</h1>

<Carousels />
      






<DataTable style={{backgroundColor:'lightgreen',  fontSize:20, color: 'red'}}
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



<Menu />
            </div>
        )
    }
}


export default Ameri;