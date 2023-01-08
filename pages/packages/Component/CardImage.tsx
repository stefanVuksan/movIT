import Script from 'next/script.js'
import React from 'react'
import {Card, Stack} from "react-bootstrap";

import Image from 'next/image'
import { ImageLoader } from '@movit/utils';

const CardImage = ({data}:{data: any}) => {
  return (
      <Card>
        <Image
          src={data.image}
          alt="MovIT Service"
          style={{width: 'auto', height: 'auto'}}
          loading="lazy"
          loader={ImageLoader}
        />
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
