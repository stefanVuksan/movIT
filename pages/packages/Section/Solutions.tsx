import React from 'react'
import Image from 'next/image'
import { ImageLoader } from '@movit/utils'

import Mark from '@movit/image/solutions/mark.svg'
import { Card, Col, Container, Row, Stack } from 'react-bootstrap'
import Section from '../Section'

const SolutionCard = ({solution, variant}: {solution: any, variant: string}) => 
  <Card className='mt-4'>
    <Image
      src={Mark}
      className={`solution-mark ${variant}`}
      alt="MovIT Solution"
      loading="lazy"
      loader={ImageLoader}
    />
    <Card.Body className='solution'>
      <Card.Title>{solution.title}</Card.Title>
      <Card.Text>{solution.description}</Card.Text>
    </Card.Body>
  </Card>

const Solutions = () => {
  const solutions = [
    {
      title: 'Lorem ipsum dolor',
      description: `m dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
      et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
      accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
      no sea takimata sanctus est Lorem ipsum dolor sit amet.`
    },
    {
      title: 'Lorem ipsum dolor',
      description: `m dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
      et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
      accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
      no sea takimata sanctus est Lorem ipsum dolor sit amet.`
    },
    {
      title: 'Lorem ipsum dolor',
      description: `m dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
      et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
      accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
      no sea takimata sanctus est Lorem ipsum dolor sit amet.`
    },
    {
      title: 'Lorem ipsum dolor',
      description: `m dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
      et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
      accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
      no sea takimata sanctus est Lorem ipsum dolor sit amet.`
    }
  ];

  const variants = ["blue", "red", "green", "yellow"];
  return (
    <Section name="solutions">
      <Stack className='container' gap={5}>
        <Row>
          <Col>
            <h6 className="text-center">
              Die Rundumlösung, die Ihnen mehr Zeit und mehr Umsatz verschafft
            </h6>
            <h2 className="text-center">Einfache lösung für ihr geschäftsmodell</h2>
          </Col>
        </Row>
        <Row xs={1} md={2} xxl={4} className="g-4">
          {solutions.map((solution, idx)=><Col key={idx}><SolutionCard solution={solution} variant={variants[idx]}/></Col>)}
        </Row>
      </Stack>
    </Section>
  )
}

export default Solutions
