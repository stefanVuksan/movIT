import React from 'react'
import CardImage from "@movit/ui-component/CardImage";

import { Col, Container, Row } from 'react-bootstrap';

const SectionServicesServiceListCards = () => {
  const services:any[] = [
      {
        image: 'image/services/service1.png',
        title: 'Terminverwaltung / Onlinebuchung',
        description: 'Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem.'
      },
      {
        image: 'image/services/service1.png',
        title: 'Terminverwaltung / Onlinebuchung',
        description: 'Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem.'
      },
      {
        image: 'image/services/service1.png',
        title: 'Terminverwaltung / Onlinebuchung',
        description: 'Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem.'
      },
      {
        image: 'image/services/service1.png',
        title: 'Terminverwaltung / Onlinebuchung',
        description: 'Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem.'
      },
  ];
  return (
      <Container className='mt-5'>
        <h2>Lorem Ipsum</h2>
        <Row xs={1} md={2} className="g-4">
        {
          services.map((service, idx) => {
            return (
                <Col key={idx}>
                  <CardImage data={service}></CardImage>
                </Col>
            )
          })
        }
        </Row>
      </Container>
  )
}

export default SectionServicesServiceListCards
