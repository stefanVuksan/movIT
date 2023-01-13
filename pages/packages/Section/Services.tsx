import React from 'react'
import Image from 'next/image'
import { ImageLoader } from '@movit/utils'

import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import Section from '../Section'

import TopLineImage from '@movit/image/services/top line.png'
import CardImage from '@movit/ui-component/CardImage'
import RotatingText from "@movit/ui-component/RotatingText";

const SectionServices = () => {
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
    <Section name="services">
      <Image
        src={TopLineImage}
        className="service-top-line"
        alt="MovIT"
        loading="lazy"
        loader={ImageLoader}
      />
      <Container>
        <Stack gap={3}>
          <h6 className='text-center'>Die Rundumlösung, die Ihnen mehr Zeit und mehr Umsatz verschafft</h6>
          {
            <RotatingText
                title="Bewege dein Unternehmen mit "
                words={['Inspiration', 'Technologie', 'Movit']}
            />
          }
          <h2 className='d-none text-uppercase text-center'>Bewege dein Unternehmen mit MOVIT</h2>
          <p className='text-center col-6 mx-auto'>
            Unsere Lösungen unterstützen Sie bei Ihrer täglichen Arbeit, ob
            Terminvereinbarung mit Ihren KundInnen oder Mitarbeitenden, die
            Verwaltung Ihrer Kundendaten, abkassieren Ihrer täglichen Einnahmen
            oder bei der Unterstützung Ihrer Buchhaltung.
          </p>
          <Button variant='primary' className='btn-block mx-auto'>Get Started</Button>
        </Stack>
      </Container>
      <Container className='mt-5'>
        <h2>Lorem Ipsum</h2>
        <Row xs={1} md={2} className="g-4">
        {
          services.map((service, idx) => {
            return (
                <Col key={idx}>
                  <CardImage data={service}/>
                </Col>
            )
          })
        }
        </Row>
      </Container>
    </Section>
  )
}

export default SectionServices
