import React from 'react'

import { Nav,  NavDropdown} from "react-bootstrap";

const MenuDesktop = () => {
  return (
      <Nav
          className="me-auto my-2 my-lg-0 w-100 justify-content-center align-items-center"
          navbarScroll
      >
         <Nav.Link className='navLinks' href="#action1">PRODUCTS</Nav.Link>
         <Nav.Link className='navLinks' href="#action2">BUSINESS TYPES</Nav.Link>
         <Nav.Link className='navLinks' href="#action3">THE MOVEMENT</Nav.Link>
         <Nav.Link className='navLinks' href="#action4">PRICING</Nav.Link>
         <NavDropdown className='navLinks' title="Lorem Ipsum" >
             <NavDropdown.Item className='navLinks' href="#action5">Lorem Ipsum</NavDropdown.Item>
             <NavDropdown.Item className='navLinks' href="#action6">
                 Lorem Ipsum
             </NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item className='navLinks' href="#action7">
                 Lorem Ipsum
             </NavDropdown.Item>
         </NavDropdown>

      </Nav>
  )
}

export default MenuDesktop
