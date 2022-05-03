import { ParallaxLayer } from '@react-spring/parallax'
import React from 'react'

export default function Work() {
  return (
    <>
        <div className="relative w-[50vw] h-screen flex flex-col justify-center items-center text-white work-left">
          <div>
            <span className='font-semibold text-[20px] tracking-tight'>I built</span>
            <h2 className='font-black text-[36px] tracking-tight'>Virtual Classroom.</h2>
            <div className='tech-stack'>
              <span>design ui</span>
              <span>express js</span>
              <span>html5</span>
              <span>javascript</span>
              <span>socket.io</span>
            </div>
          </div>
        </div>
    </>
  )
}
