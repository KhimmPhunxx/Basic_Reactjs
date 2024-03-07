import React from 'react'

import data_ from './Our_Service.json'

import { Carousel } from 'antd';


function Slider_() {
  return (
    <div>
        <Carousel autoplay>
            <div>
                <h3 className='w-full h-[500px] bg-gray-700' >1</h3>
            </div>
            <div>
                <h3 className='w-full h-[500px] bg-red-700'>2</h3>
            </div>
        </Carousel>

        <marquee behavior="scroll" direction="left" className='text-2xl text-gray-800 mt-5'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</marquee>
      
    </div>
  )
}

export default Slider_
