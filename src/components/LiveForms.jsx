import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'

const LiveForms = () => {
  return (
    <div className=' flex flex-row justify-between gap-10'>
            <div>
            <h1 className='text-[64px] font-sans font-bold '>Live forms</h1>
            <div className='font-sans font-medium text-[24px] mb-6 w-[530px]'>
            Increase your response rate by engaging your audience with live video forms
            </div>
            <div className='font-sans font-medium text-[24px] mb-6 w-[530px]'>
            With live forms you can easily create live videos that simultaneously contain a form for viewers to fill in order to register for events and courses, get their contact information, get their feedback and more!
            </div>
            </div>
            
            <div className=' h-[604px] w-[1006px] rounded-[50px] bg-[#D4D4D8] mb-4  '>
                
            </div>
        </div>
  )
}

export default SectionWrapper(LiveForms)