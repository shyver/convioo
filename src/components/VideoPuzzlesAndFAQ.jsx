import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'

const VideoPuzzlesAndFAQ = () => {
  return (
    <div className='flex flex-row w-full gap-4'>
        <div className='w-[50%] flex flex-col'>
            <div className=' h-[878px] rounded-[50px] bg-[#D4D4D8] mb-4 mr-4 '>
                
            </div>
            <h1 className='text-[64px] font-sans font-bold '>FAQ</h1>
            <div className='font-sans font-medium text-[24px] '>
            Make your own visual and dynamic FAQ 
            </div>
        </div>
        <div className='w-[50%] flex flex-col'>
        <h1 className='text-[64px] font-sans font-bold mb-4 '>Video Puzzles</h1>
                <div className='font-sans font-medium text-[24px] mb-12 w-[530px]'>
                Increase your response rate by engaging your audience with live video forms
                </div>
        <div className=' h-[878px] rounded-[50px] bg-[#D4D4D8] mb-4  '>
                
                </div>
                
        </div>

    </div>
  )
}

export default SectionWrapper(VideoPuzzlesAndFAQ)