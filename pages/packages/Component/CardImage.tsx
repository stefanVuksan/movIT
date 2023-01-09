import React from 'react'
import Image from 'next/image'
import { ImageLoader } from '@movit/utils'

import {Card, Stack} from "react-bootstrap";

import ArrowIcon from '@movit/image/services/arrow.svg'

const CardImage = ({data}:{data: any}) => {
  return (
      <Card>
        <Card.Img variant='top' src={data.image} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text className='col-8'>{data.description}</Card.Text>
          <Stack direction="horizontal" gap={3}>
            <Card.Link href="#">See Solution</Card.Link>
            <Card.Link href="#" className='ms-auto btn-read-more'>
            <Image
              src={ArrowIcon}
              alt="MovIT"
              loading="lazy"
              loader={ImageLoader}
            />  
            </Card.Link>
          </Stack>
        </Card.Body>
      </Card>
  )
}

export default CardImage
