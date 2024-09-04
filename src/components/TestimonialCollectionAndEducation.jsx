import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'

const TestimonialCollectionAndEducation = () => {
  return (
    <div className='flex flex-row w-full gap-4'>
        
        <div className='w-[50%] flex flex-col'>
        <h1 className='text-[64px] font-sans font-bold mb-4  '>Testimonial <br/> collection</h1>
                <div className='font-sans font-medium text-[24px] mb-12 w-[530px]'>
                Collect video testimonials that make an impact.<br/><br/>With Convioo, customers talk about their experience with the click of a button by recording their own custom testimonials.<br/>It has never been easier to collect testimonials and build trust with your customers
                </div>
        <div className=' h-[878px] rounded-[50px] bg-[#D4D4D8] mb-4  mr-4'>
                
                </div>
                
        </div>
        <div className='w-[50%] flex flex-col'>
            <div className=' h-[878px] rounded-[50px] bg-[#D4D4D8] mb-4  '>
                
            </div>
            <h1 className='text-[64px] font-sans font-bold '>Education</h1>
            <div className='font-sans font-medium text-[24px] '>
            Convioo can be used as an education tool to help you onboard students, introduce yourself and address some basic and common questions<br/> <br/>You also have the ability to create dynamic and personalized learning experiences for every student as well as make immersive quizzes and tests which helps you build a connection with your students.
            </div>
        </div>

    </div>
  )
}

export default SectionWrapper(TestimonialCollectionAndEducation)