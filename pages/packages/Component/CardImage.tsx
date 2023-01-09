import React from 'react'
import {Card, Stack} from "react-bootstrap";

const CardImage = ({data}:{data: any}) => {
  return (
      <Card>
        <Card.Img variant='top' src={data.image} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <Stack direction="horizontal" gap={3}>
            <Card.Link href="#">See Solution</Card.Link>
            <Card.Link href="#" className='ms-auto'>{'>'}</Card.Link>
          </Stack>
        </Card.Body>
      </Card>
  )
}

export default CardImage
