import React from 'react'
import Hero_Section from '../../components/home_page/hero_sections/Hero_Section'
import Cards from '../../components/home_page/cards/Cards'
import Information from '../../components/home_page/info/Information'
import Our_Service from '../../components/home_page/our_service/Our_Service'
import Slider_ from '../../components/home_page/our_service/Slider_'
import Count_Number from '../../components/home_page/count_number/Count_Number'

function HomePage() {
  return (
   <main>
      <section className=''>
        <Hero_Section />
      </section>

      <section className='mt-10'>
       <Cards />
      </section>

      <section className='mt-10'>
       <Information />
      </section>

      <section className='mt-10'>
        <Our_Service />
      </section>

      <section className='mt-10'>
        <Count_Number />
      </section>


      
   </main>
  )
}

export default HomePage
