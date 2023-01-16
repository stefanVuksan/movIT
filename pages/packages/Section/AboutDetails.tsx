import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ImageLoader } from '@movit/utils'

import { Card, Col, Container, Row, Stack } from 'react-bootstrap'
import Section from '../Section'

import TickIcon from '@movit/image/aboutus/tick.svg'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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

const SectionAboutDetails = () => {
  const lists = [
    "Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem.",
    "Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem.",
  ]

  const lines = useRef<any>([]);
  const images = useRef<any>([]);

  useEffect(() => {
    gsap.fromTo(lines.current,
      {
        autoAlpha: 0,
        y: +100,
      },
      {
        duration: .7, 
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: lines.current[0],
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        }
      }  
    );
    
    gsap.timeline({
      scrollTrigger: {
        trigger: images.current[0],
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      }
    }).fromTo(images.current[0],
      {
        x: '-100%',
      },
      {
        x: 0,
        onStart: ()=>{
          gsap.set(images.current[1], {opacity: 0});
        },
        onComplete: ()=>{
          gsap.set(images.current[1], {opacity: 1});
        }
      }
    ).fromTo(images.current[0],
      {
        x: 0,
      },
      {
        x: '100%',
      }
    ).play();

  }, [])

  const addToRefs = (el: any, list: any[]) => {
    if (el && !list.includes(el)) {
        list.push(el);
    }
  };
  return (
    <Section name="about-details">
      <Container>
        <Row xs={1} xxl={2}>
          <Col>
            <Stack>
              <h2 ref={el=>addToRefs(el, lines.current)} className='col-xxxl-10'>Wie kann movIT Deinem Unternehmen in bewegung</h2>
              <h6 ref={el=>addToRefs(el, lines.current)} className='col-10 col-xxxl-9 py-4'>Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem. Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem. Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem. Erhöhen Sie Ihre Umsätze durch ein immer verfügbares Online-Terminbuchungssystem.</h6>
              <div ref={el=>addToRefs(el, lines.current)}>{lists.map((item, idx)=><ListItem key={idx} label={item}/>)}</div>
            </Stack>
          </Col>
          <Col>
            <Card className='overflow-hidden'>
              <div ref={el=>addToRefs(el, images.current)} className='position-absolute bg-gray-200 w-100 h-100'></div>
              <Card.Img ref={(el:any)=>addToRefs(el, images.current)} src='/image/aboutus/details.png' />
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default SectionAboutDetails
