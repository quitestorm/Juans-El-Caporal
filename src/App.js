import React from 'react';

import './App.css';
import Main from './components/main'
import { Header, Navigation,Drawer} from 'react-mdl'
import {  Link } from "react-router-dom";






function App() {
  return (
    <div className="App">
     {/* Uses a transparent header that draws on top of the layout's background */}
     <Header className='header'>

        <  Link className='link2'  to="/"><h4>JUANS EL CAPORAL</h4></Link>
            <Navigation>
            
                <Link className='link' to="/about">About</Link >
                <Link  className='link'  to="/mainMenu">Menu</Link >
                <Link  className='link'  to="/contact">Contact</Link >
               
            </Navigation>
        <Drawer title="Title">
            <Navigation>
            <  Link  to="/">"JUANS EL CAPORAL"> </  Link>
            <Link  to="/about">About</Link >
           
                <Link  to="/contact">Contact</Link >
            </Navigation>
        </Drawer>
        </Header>


<Main />


    </div>


  );
}

export default App;
