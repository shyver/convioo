import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    
    <div className='flex flex-col gap-10'>
        <div className='font-sans text-[40px] font-semibold w-[749px]'>
            Recommended by hundreds of satisfied customers
        </div>
        <div className='flex flex-row gap-4 ' >
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
        </div>
    </div>
  )
}

export default SectionWrapper(Testimonials)