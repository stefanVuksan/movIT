import React from 'react'
import Image from 'next/image'
import {ImageLoader} from "@movit/utils";

import { Button, Card, Col, Container, Row, Stack } from 'react-bootstrap'
import Section from '../Section'

import Logo from '@movit/image/navbar/logo.svg'

import EmailIcon from '@movit/image/footer/sms.svg'
import LocationIcon from '@movit/image/footer/location.svg'
import PhoneIcon from '@movit/image/footer/phone.svg'
import FacebookIcon from '@movit/image/footer/facebook.svg'
import LinkedInIcon from '@movit/image/footer/LinkedIn.svg'
import InstgramIcon from '@movit/image/footer/instagram.svg'

const ListItem = ({label, variant} : {label: string, variant: any}) =>
  <Stack direction='horizontal' gap={3} className={`justify-content-center ${variant == 'light' ? 'align-items-baseline' : 'align-items-center'}`}>
    {variant}
    <h6 className={`col-8 text-white m-1 opacity-50`} style={{fontSize: '1.125rem'}}>{label}</h6>
  </Stack>

const HR = () => <hr style={{color: 'rgba(255, 255, 255, .2)'}}/>

const Footer = () => {

  const list1 = [
    "Zufriedenheitsgarantie",
    "Individuell",
    "Personlich",
  ]

  const list2 = [
    {
      variant: EmailIcon,
      label: "Zufriedenheitsgarantie"
    },

    {
      variant: LocationIcon,
      label: "Zufriedenheitsgarantie"
    },

    {
      variant: PhoneIcon,
      label: "Zufriedenheitsgarantie"
    }
  ]

  const list3 = [
    {
      variant: FacebookIcon,
      label: "Zufriedenheitsgarantie"
    },

    {
      variant: LinkedInIcon,
      label: "Zufriedenheitsgarantie"
    },

    {
      variant: InstgramIcon,
      label: "Zufriedenheitsgarantie"
    }
  ]

  return (
    <Section name="footer">
      <Container>
        <Stack gap={5}>
          <Row>
            <Col xs={12} md={4} xxxl={6}>
              <Image loader={ImageLoader} src={Logo} alt="Logo of MovIT" />
            </Col>
            <Col xs={12} md={8} xxxl={6}>
              <Row xs={1} xl={3}>
                {list1.map((item, idx)=><Col key={idx}><ListItem label={item} variant={<div className='footer-circle' />} /></Col>)}
              </Row>
            </Col>
          </Row>
          <HR />
          <Row className='g-4'>
            <Col xs={12} md={6} xxl={4}>
              <Stack gap={2}>
                {list2.map((item, idx)=><Col key={idx}><ListItem label={item.label} variant={<Image src={item.variant} alt="MovIT" loading="lazy" loader={ImageLoader} />} /></Col>)}
              </Stack>
            </Col>
            <Col>
              <h6 className={`text-white text-center opacity-50`} style={{fontSize: '1.125rem'}}>Zufriedenheitsgarantie</h6>
            </Col>
            <Col xs={12} md={6} xxl={4}>
              <Stack gap={2}>
                {list3.map((item, idx)=><Col key={idx}><ListItem label={item.label} variant={<Image src={item.variant} alt="MovIT" loading="lazy" loader={ImageLoader} />} /></Col>)}
              </Stack>
            </Col>
          </Row>
          <HR />
        </Stack>
        <Row>
          <Col><h6 className={`text-white text-center opacity-50`} style={{fontSize: '1.125rem'}}>2023@All rights reserved</h6></Col>
        </Row>
      </Container>
    </Section>
  )
}

export default Footer
