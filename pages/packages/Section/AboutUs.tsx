import React from 'react'

import { Card, Col, Container, Row, Stack } from 'react-bootstrap'
import Section from '../Section'
import PercentBar from '@movit/ui-component/PercentBar'

const Specificity = ({data}: {data: any}) =>
  <Stack gap={3}>
    <PercentBar value={data.percent} height={data.barHeight} />
    <h5>{data.title}</h5>
    <h6>{data.description}</h6>
  </Stack>

const AboutUs = () => {

  const specificities = [
    {
      percent: 90,
      barHeight: 190,
      title: 'Lorem ipsum dolor',
      description: 'Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem. Erhöhen Sie Ihre Umsätze.'
    },

    {
      percent: 90,
      barHeight: 100,
      title: 'Lorem ipsum dolor',
      description: 'Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem. Erhöhen Sie Ihre Umsätze.'
    },

    {
      percent: 90,
      barHeight: 190,
      title: 'Lorem ipsum dolor',
      description: 'Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem. Erhöhen Sie Ihre Umsätze.'
    },

    {
      percent: -90,
      barHeight: 100,
      title: 'Lorem ipsum dolor',
      description: 'Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem. Erhöhen Sie Ihre Umsätze.'
    }
  ]
  
  return (
    <Section name="about-us">
      <Container>
        <Row xs={1} xxl={2}>
          <Col>
            <Card>
              <Card.Img src='/image/aboutus/intro.png' />
            </Card>
          </Col>
          <Col>
            <Row>
              <Col xxl={1} xxxl={2}>
              </Col>
              <Col>
                <Stack>
                    <h2>Inspiration und Optimierung - der perfekte Mix für erfolgreiche Unternehmungen</h2>
                    <h6 className='py-4 col-9'>Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem. Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem.</h6>                    
                    <Row xs={2} className='align-items-end pt-5 g-4'>{specificities.map((spec, idx)=><Col key={idx}><Specificity data={spec} /></Col>)}</Row>
                </Stack>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default AboutUs
