import React from 'react'
import Image from 'next/image'

import MenuDesktop from './Menu'
import Logo from '@movit/image/navbar/logo.svg'
import Cart from '@movit/image/navbar/cart.svg'

import {Container, Nav, Navbar} from "react-bootstrap";
import {ImageLoader} from "@movit/utils";

const NavBar = () => {
  return (
      <Navbar expand="md" className='shadow-sm py-3'>
          <Container>
              <Navbar.Brand style={{ width: '200px' }} href="/">
                  <Image  loader={ImageLoader} src={Logo} alt="Logo of MovIT" />
              </Navbar.Brand>
              <Navbar.Toggle  />
              <Navbar.Collapse >
                  <MenuDesktop/>
                  <div style={{ width: '200px' , margin: 'auto'}} className="d-flex">
                      <Nav
                          className="me-auto w-100 justify-content-center align-items-center align-items-xxl-baseline"
                          style={{ maxHeight: '100px' }}
                          navbarScroll
                      >
                          <Nav.Link className='shopLog'  href="#action1">Log In</Nav.Link>
                          <Nav.Link className='shopLog'  href="#action2">Shop
                              <Image loader={ImageLoader} className={'ps-md-2'} height={30} priority src={Cart} alt={'Shop icon'}/>
                          </Nav.Link>
                      </Nav>

                  </div>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}

export default NavBar


