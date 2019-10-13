import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/main'
import { Header, Navigation,Drawer} from 'react-mdl'
import {  Link } from "react-router-dom";
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'





function App() {
  return (
    <div className="App"className='responsive' >
     {/* Uses a transparent header that draws on top of the layout's background */}
     {/* <Header className='header'>

        <  Link className='responsive'  className='link2'  to="/"><h4>JUANS EL CAPORAL</h4></Link>
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
        </Header> */}



<Navbar className='responsive' bg="warning" expand="lg" >
  <Navbar.Brand> <  Link className='responsive'  className='link2'  to="/"><h4 className='responsive'>JUANS EL CAPORAL</h4></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link > <Link className='link' to="/about">About</Link ></Nav.Link>
      <Nav.Link > <Link style={{height:22}} className='link' to="/mainMenu">Menu</Link ></Nav.Link>
      {/* <NavDropdown title={<Link  className='link'  to="/mainMenu">Menu</Link >} id="basic-nav-dropdown" >
        <NavDropdown.Item href="/appa">Appatizers</NavDropdown.Item>
        <NavDropdown.Item href="/salad">Salads</NavDropdown.Item>
        <NavDropdown.Item href="/soup">Soup</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
      <Nav.Link > <Link className='link' to="/contact">Contact</Link ></Nav.Link>

    </Nav>
  
  </Navbar.Collapse>
</Navbar>








<Main />


    </div>


  );
}

export default App;
