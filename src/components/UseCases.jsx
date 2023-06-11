import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper';
import UseCard from './UseCard';
import { ecommerce, outreach,marketing,saas } from '../assets';

const UseCases = () => {
  return (
    <div className=' bg-black w-full h-[811.38px] max-md:h-[1200px] items-center rounded-[31.25px] flex flex-col '>
        <h1 className='font-sans text-white min-[760px]:text-[64px] max-[760px]:text-[40px] max-[480px]:text-[25px] text-center w-10/12 mt-[93.32px] mb-[40px] leading-[70px]'>Thousands of fast-growing brands &
solutions juste like yours</h1>
    <div className='w-full h-fit  px-[40.62px] gap-[20.31px] flex flex-row max-md:flex-col mb-[20.31px]'>
    <UseCard width='58%' title="eCommerce" description="Use Convioo to tell your founding story, share your vision, or talk
about what makes you special." image={ecommerce} imgStyle=' w-[159.11px] h-[80%] overflow-hidden flex items-end justify-center'/>
    <UseCard width='42%' title="Outreach" description="A one-size-fits-all solution. Let viewers choose their own journeys."
    image={outreach}
    imgStyle=' w-[159.11px] h-[80%] overflow-hidden flex items-start justify-center'
    itemAlign="end"
    />

    </div>
    <div className='w-full h-[208.03px]  px-[40.62px] gap-[20.31px] flex flex-row max-md:flex-col'>
    <UseCard width='42%' title="Marketing" description="Clearly communicate the key benefits of your
product or service with an interactive video." 
image={marketing}
imgStyle=' w-[159.11px] h-[100%] overflow-hidden flex items-center justify-center'
itemAlign="center"

/>
    <UseCard width='58%' title="SaaS" description="Show what your products can do in a fraction of
the time and cost with video demos." 
image={saas}
imgStyle=' w-[235.91px] h-[142.19px] overflow-hidden flex items-center justify-center'
itemAlign="center"
/>
        
    </div>
    </div>
  )
}

export default SectionWrapper(UseCases)