import Script from 'next/script.js'
import React from 'react'

const Particles = () => {
  return (
      <div id="movit-particles" className='position-absolute w-100 h-100' >
          <canvas
              className="particles-js-canvas-el"
              style={{height: '100%', width: '100%'}}
          />
          <Script src={'script/particles.js'} />
      </div>
  )
}

export default Particles
