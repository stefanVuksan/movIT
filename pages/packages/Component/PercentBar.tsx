import React from 'react'
import {Stack} from "react-bootstrap";

const PercentBar = ({value, height}:{value: number, height: string}) => {
  const valuePercent = value > 0 ? (200 - value) / 2 : Math.abs(value);
  return (
    <Stack direction='horizontal' gap={3} className='align-items-start'>
      <div className={`percent-bar ${value > 0 ? 'bg-blue' : 'bg-red'}`} style={{height}}>
        <div className='value' style={{height: valuePercent + '%'}} />
      </div>
      <p className={`percent ${value > 0 ? 'text-green' : 'text-red'}`}>{value}%</p>
    </Stack>
  )
}

export default PercentBar
