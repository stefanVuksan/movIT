import React from 'react'
import Image from 'next/image'
import { ImageLoader } from '@movit/utils'

import { Button, Card, Col, Container, Row, Stack } from 'react-bootstrap'
import BootstrapImage from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Section from '../Section'

import TickIcon from '@movit/image/contactus/tick.svg'
import TickShadowIcon from '@movit/image/contactus/tick-shadow.svg'

const ListItem = ({label, variant} : {label: string, variant: string}) =>
  <Stack direction='horizontal' gap={3} className={`justify-content-center ${variant == 'light' ? 'align-items-baseline' : 'align-items-center'}`}>
    <Image
      src={variant == 'light' ? TickIcon : TickShadowIcon}
      alt="MovIT"
      loading="lazy"
      loader={ImageLoader}
    />
    <h6 className={`col-8 ${variant == 'light' ? 'text-white' : 'text-black'} m-1 opacity-50`}>{label}</h6>
  </Stack>

const ContactUs = () => {

  const lists = [
    "Die Rundumlösung, die Ihnen mehr Zeit und",
    "Die Rundumlösung, die Ihnen mehr Zeit und",
    "Die Rundumlösung, die Ihnen mehr Zeit und",
  ]

  const avatars = [
    '/image/contactus/avatar1.png',
    '/image/contactus/avatar2.png',
    '/image/contactus/avatar3.png',
  ]

  return (
    <Section name="contact-us">
      <Container className='position-relative'>
        <Stack gap={4}>
          <h2 className='text-white text-center'>Einfache lösung für ihr geschäftsmodell</h2>
          <h6 className='text-white text-center'>Die Rundumlösung, die Ihnen mehr Zeit und mehr Umsatz verschafft</h6>
          <Row>
            <Col xxl={1} xxxl={2} />
            <Col xs={12} xxl={4}>
              <Stack gap={3}>
                <h2 className='text-white'>Einfache lösung für ihr geschäftsmodell</h2>
                <div>
                  {lists.map((item, idx)=><ListItem key={idx} label={item} variant="light"/>)}
                </div>
                <Button variant="light" className='btn-block'>Get Started</Button>
                <Stack direction='horizontal' gap={3} className='py-2'>
                  {avatars.map((avatar, idx) => <BootstrapImage key={idx} roundedCircle src={avatar}/>)}
                </Stack>
              </Stack>
            </Col>
            <Col xs={12} xxl={7} xxxl={6}>
              <Card className='contact-form'>
                <Stack gap={3}>
                  <h2>Einfache lösung für ihr geschäftsmodell</h2>
                  <Form.Control type="input" className='bg-light border-0' placeholder='example@gmail.com'/>
                  <Button variant="primary">Contact Us</Button>
                  <div>
                    {lists.map((item, idx)=><ListItem key={idx} label={item} variant="dark"/>)}
                  </div>
                </Stack>
              </Card>
            </Col>
          </Row>
        </Stack>
      </Container>
    </Section>
  )
}

export default ContactUs
