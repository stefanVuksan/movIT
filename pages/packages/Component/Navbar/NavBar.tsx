import React from 'react'
import Image from 'next/image'

import MenuDesktop from './Menu'
import Logo from '@movit/image/navbar/logo.svg'
import Cart from '@movit/image/navbar/cart.svg'

import {Container, Nav, Navbar} from "react-bootstrap";
import {ImageLoader} from "@movit/utils";

const NavBar = () => {
  const menus = [
    {
      title: 'products',
      children: [
        {
          title: 'Commerce',
          description: 'Sell on a website, point of sale, or social media',
          children: [
            {
              title: 'Online store',
            },
            {
              title: 'Point of sale',
            },
            {
              title: 'Invoices',
            },
            {
              title: 'Online checkout links',
            },
            {
              title: 'Virtual terminal',
            },
            {
              title: 'Social media',
            },
            {
              title: 'All online solutions',
            },
            {
              title: 'Payment processing',
            },
            {
              title: 'Browse hardware',
            },
            {
              title: 'All commerce solutions',
            }
          ]
        },

        {
          title: 'Customers',
          description: 'Drive business with marketing, messaging, and loyalty programs.',
          children: [
            {
              title: 'Support',
            },
            {
              title: 'What`s new',
            },
            {
              title: 'Contact sales',
            },
            {
              title: 'Seller Community',
            },
            {
              title: 'Resource Center',
            },
          ]
        },

        {
          title: 'Banking',
          description: 'Take payments, access funds instantly, and get a loan.',
          children: [
            {
              title: 'Online store',
            },
            {
              title: 'Point of sale',
            },
            {
              title: 'Invoices',
            },
            {
              title: 'Online checkout links',
            },
            {
              title: 'Virtual terminal',
            },
            {
              title: 'Social media',
            },
            {
              title: 'All online solutions',
            },
            {
              title: 'Payment processing',
            },
            {
              title: 'Browse hardware',
            },
            {
              title: 'All commerce solutions',
            }
          ]
        },

        {
          title: 'Staff',
          description: 'Run your team efficiently with permissions, timecards, and payroll.',
          children: [
            {
              title: 'Online store',
            },
            {
              title: 'Point of sale',
            },
            {
              title: 'Invoices',
            },
            {
              title: 'Online checkout links',
            },
            {
              title: 'Virtual terminal',
            },
            {
              title: 'Social media',
            },
            {
              title: 'All online solutions',
            },
            {
              title: 'Payment processing',
            },
            {
              title: 'Browse hardware',
            },
            {
              title: 'All commerce solutions',
            }
          ]
        },

        {
          title: 'Developer',
          description: 'Connect third-party apps or build custom solutions',
          children: [
            {
              title: 'Online store',
            },
            {
              title: 'Point of sale',
            },
            {
              title: 'Invoices',
            },
            {
              title: 'Online checkout links',
            },
            {
              title: 'Virtual terminal',
            },
            {
              title: 'Social media',
            },
            {
              title: 'All online solutions',
            },
            {
              title: 'Payment processing',
            },
            {
              title: 'Browse hardware',
            },
            {
              title: 'All commerce solutions',
            }
          ]
        },
      ]
    },

    

    {
      title: 'Business Types',
    },

    {
      title: 'The Movement',
    },

    {
      title: 'Pricing',
    },
  ]

  return (
      <Navbar expand="md" className='shadow-sm py-3'>
          <Container>
              <Navbar.Brand style={{ width: '200px' }} href="/">
                  <Image  loader={ImageLoader} src={Logo} alt="Logo of MovIT" />
              </Navbar.Brand>
              <Navbar.Toggle  />
              <Navbar.Collapse >
                  <MenuDesktop menus={menus}/>
                  <div style={{margin: 'auto'}} className="d-flex">
                      <Nav
                          className="me-auto justify-content-md-center align-items-md-center align-items-xxl-baseline"
                          style={{ width: 200, maxHeight: '100px' }}
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


