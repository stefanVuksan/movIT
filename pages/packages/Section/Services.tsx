import React from 'react'
import Image from 'next/image'
import { ImageLoader } from '@movit/utils'

import { Button, Card, Col, Container, Nav, NavDropdown, Row, Stack } from 'react-bootstrap'
import Section from '../Section'
import SectionServicesServiceListCards from './SectionServicesServiceListCards'

import TopLineImage from '@movit/image/services/top line.png'

const SectionServices = () => {
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
          {/* <RotatingText
            title="Bewege dein Unternehmen mit "
            words={['Inspiration', 'Technologie', 'Movit']}
          /> */}
          <h2 className='text-uppercase text-center'>Bewege dein Unternehmen mit MOVIT</h2>
          <p className='text-center col-6 mx-auto'>
            Unsere Lösungen unterstützen Sie bei Ihrer täglichen Arbeit, ob
            Terminvereinbarung mit Ihren KundInnen oder Mitarbeitenden, die
            Verwaltung Ihrer Kundendaten, abkassieren Ihrer täglichen Einnahmen
            oder bei der Unterstützung Ihrer Buchhaltung.
          </p>
          <Button variant='primary' className='btn-block mx-auto'>Get Started</Button>
        </Stack>
      </Container>
      <SectionServicesServiceListCards />
    </Section>
  )
}

export default SectionServices
