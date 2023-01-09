import React from 'react'

import { Button, Card, Col, Container, Nav, NavDropdown, Row } from 'react-bootstrap'
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
          <Col className="col-10 col-sm-12 col-xxl-7 m-0">
            <Card>
              <Card.Img
                src='/image/hero/slide_1.jpg'
                alt="MovIT Hero"
                loading="lazy"
              />
            </Card>
          </Col>
          <Col className="col-xxl-5 position-relative">
            <Image
              src={Bubbles}
              alt="blue bubbles"
              style={{ position:'absolute', top: '-10%', left: '-10%', zIndex: '-1'}}
              loader={ImageLoader}
            />
            <h1 className="fw-bold lh-1 mb-3">
              Move and inspire your business with MovIT
            </h1>
            <p className="lead">
              Build your business here. Take it anywhere. Make the Move!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start d-sm-flex mt-5">
              <Button variant="primary">Get Started</Button>
              <Button variant="light">Contact Us</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default SectionHero
