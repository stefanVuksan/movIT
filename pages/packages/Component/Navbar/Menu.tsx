import React from 'react'

import { Nav,  NavDropdown} from "react-bootstrap";

const MenuDesktop = () => {
  return (
      <Nav
          className="me-auto w-100 justify-content-center align-items-center gap-xxl-5"
          navbarScroll
      >
         <Nav.Link href="#action1">PRODUCTS</Nav.Link>
         <Nav.Link href="#action2">BUSINESS TYPES</Nav.Link>
         <Nav.Link href="#action3">THE MOVEMENT</Nav.Link>
         <Nav.Link href="#action4">PRICING</Nav.Link>
         {/* <NavDropdown className='navLinks' title="Lorem Ipsum" >
             <NavDropdown.Item className='navLinks' href="#action5">Lorem Ipsum</NavDropdown.Item>
             <NavDropdown.Item className='navLinks' href="#action6">
                 Lorem Ipsum
             </NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item className='navLinks' href="#action7">
                 Lorem Ipsum
             </NavDropdown.Item>
         </NavDropdown> */}

      </Nav>
  )
}

export default MenuDesktop
