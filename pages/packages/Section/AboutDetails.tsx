import React from 'react'
import Image from 'next/image'
import { ImageLoader } from '@movit/utils'

import { Card, Col, Container, Row, Stack } from 'react-bootstrap'
import Section from '../Section'

import TickIcon from '@movit/image/aboutus/tick.svg'

const ListItem = ({label} : {label: string}) =>
  <Stack direction='horizontal' gap={3} className='align-items-start'>
    <Image
      src={TickIcon}
      className={`aboutdetails-tick`}
      alt="MovIT"
      loading="lazy"
      loader={ImageLoader}
    />
    <p className='col-4'>{label}</p>
  </Stack>

const AboutDetails = () => {
  const lists = [
    "Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem.",
    "Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem.",
  ]
  return (
    <Section name="about-details">
      <Container>
        <Row xs={1} xxl={2}>
          <Col>
            <Stack>
              <h2 className='col-xxxl-10'>Wie kann movIT Deinem Unternehmen in bewegung</h2>
              <h6 className='col-10 col-xxxl-9 py-4'>Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem. Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem. Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem. Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem.</h6>
              {lists.map((item, idx)=><ListItem key={idx} label={item}/>)}
            </Stack>
          </Col>
          <Col>
            <Card>
              <Card.Img src='/image/aboutus/details.png' />
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default AboutDetails
