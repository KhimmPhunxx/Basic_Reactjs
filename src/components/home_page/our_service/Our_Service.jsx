import React from 'react'

import dasta_ from './Our_Service.json'

function Our_Service() {

  return (
    <main className='max-w-5xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-800 text-center'>Our Servive</h1>
        <p className='text-xl text-gray-600 text-center'>Lorem ipsum is simply dummy text of the printing and typesetting</p>
        <section className='grid grid-cols-3 gap-16 mt-8'>
            {
                dasta_.data_.map((item, index) => {
                    return (
                        <div key={index} className=' bg-white rounded-lg shadow-lg' data-aos="fade-up">
                           <div className=' w-full h-[250px] object-cover'>
                                 <img className='w-full h-full object-cover' src={item.image} alt="" />
                           </div>
                           <div className='p-5'>
                                <h1 className=' text-xl font-bold'> {item.name} </h1>
                                <p className=' text-lg text-gray-600 font-[400]'>{item.desc}</p>
                           </div>
                        </div>
                    )
                })
            }
        </section>

    </main>
  )
}

export default Our_Service
