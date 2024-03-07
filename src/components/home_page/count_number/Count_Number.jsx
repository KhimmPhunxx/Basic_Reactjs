import React, { useState } from 'react'


import Count from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import { RiHomeOfficeLine } from "react-icons/ri";
import { LuUsers2 } from "react-icons/lu";
import { FiCheckSquare } from "react-icons/fi";
import { TbUserCheck } from "react-icons/tb";



function Count_Number() {

    const [countUp , setCountUp] = useState(false)

    const data = [
        {
            id : 1,
            title : "Since",
            number : 2024,
            icon : <RiHomeOfficeLine />
        },
        {
            id : 2,
            title : "Team Members",
            number : 55,
            icon : <LuUsers2 />
        },
        {
            id : 3,
            title : "Project Done",
            number : 100,
            icon : <FiCheckSquare />
        },
        {
            id : 4,
            title : "Happy Client",
            number : 90,
            icon : <TbUserCheck />
        }
    ]

  return (
    <div>
        
        <ScrollTrigger onEnter={() => setCountUp(true)}>
            <div className='text-center'>
            </div>
        </ScrollTrigger>

        <section className=' w-full bg-white py-10'>
                <div className='max-w-5xl mx-auto flex'>
                    {
                        data.slice(0 ,1).map((item, index) => {
                            return (
                                <div key={index} className='w-[250px] h-[250px] bg-white rounded-lg p-5'>
                                    <div className='w-full text-4xl h-[100px] flex justify-center items-center'>
                                        {item.icon}
                                    </div>
                                    <div className='text-center space-y-6'>
                                        <h1 className='text-4xl font-bold text-gray-800'> {item.number} </h1>
                                        <p className='text-lg text-gray-600'>{item.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    } 

                    
                    <div className='grid grid-cols-3 max-w-5xl mx-auto'>
                        {
                            data.slice(1 ,4).map((item, index) => {
                                return (
                                    <div key={index} className='w-[250px] h-[250px] bg-white rounded-lg p-5'>
                                        <div className='w-full text-4xl h-[100px] flex justify-center items-center'>
                                            {item.icon}
                                        </div>
                                        <div className='text-center space-y-6'>
                                            <h1 className='text-4xl font-bold text-gray-800'> <Count start={0} end={countUp ? item.number : 0} duration={10} />+</h1>
                                            <p className='text-lg text-gray-600'>{item.title}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                
            </div>
        </section>
      
    </div>
  )
}

export default Count_Number
