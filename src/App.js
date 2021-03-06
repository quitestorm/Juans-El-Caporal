import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/main'

import {  Link } from "react-router-dom";
import {Nav, Navbar} from 'react-bootstrap'
import Juanspho from './components/juanspho.png'




function App() {
  return (
    <div className='App responsive' >
   

<Navbar className='responsive' bg="warning" expand="lg" >
  <Navbar.Brand> <  Link className='responsive link2'  to="/"><h4 className='responsive'>JUANS EL CAPORAL</h4></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link > <Link className='link' to="/about">About</Link ></Nav.Link>
      <Nav.Link > <Link style={{height:22}} className='link' to="/mainMenu">Menu</Link ></Nav.Link>
     
      <Nav.Link > <Link className='link' to="/contact">Contact</Link ></Nav.Link>
      <img className='phone' src={Juanspho} alt=''></img>

    </Nav>
  
  </Navbar.Collapse>
</Navbar>








<Main />


    </div>


  );
}

export default App;
