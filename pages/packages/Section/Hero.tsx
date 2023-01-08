import React from 'react'

import { Card, Col, Container, Nav, NavDropdown, Row } from 'react-bootstrap'
import Image from 'next/image'

import Slide1 from '@movit/image/hero/slide_1.jpg'
import Bubbles from '@movit/image/hero/bubbles.svg'
import Particles from '@movit/ui-component/Particles'
import Section from '../Section'
import {ImageLoader} from "@movit/utils";

const SectionHero = () => {
  return (
    <Section name="hero">
      <Particles />
      <Container className="container px-4 py-5 position-relative">
        <Row className="flex-md-row-reverse align-items-center g-5 py-5">
          <Col className="col-10 col-sm-12 col-md-7 m-0">
            <Card>
              <Image
                src={Slide1}
                alt="MovIT Hero"
                style={{ width: 'auto', height: '60vh' }}
                loading="lazy"
                loader={ImageLoader}
              />
            </Card>
          </Col>
          <Col className="col-md-5 relative">
            <Image
              src={Bubbles}
              alt="blue bubbles"
              style={{ width: '44vh', height: '31vh', position:'absolute', top: '18%', left: '-7%', zIndex: '-1'}}
              loader={ImageLoader}
            />
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Move and inspire your business with MovIT
            </h1>
            <p className="lead">
              Build your business here. Take it anywhere. Make the Move!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start d-sm-flex">
              <button
                type="button"
                className="getStartedBtn"
              >
                Get Started
              </button>
              <button
                type="button"
                className="contactBtn"
              >
                Contact Us
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default SectionHero
