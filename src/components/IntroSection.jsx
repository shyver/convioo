import React from 'react';
import SectionWrapper from '../hoc/SectionWrapper';
import PhoneCard from './PhoneCard';
import SecondaryButton from './SecondaryButton';
import { sectionTitleStyle, sectionTextStyle } from '../constants'; 
import PrimaryButton from './PrimaryButton';
const IntroSection = (props) => {
    const reverse=props.reverse;
  return (
    
        <div className={`bg-${props.bg} h-[750px] max-md:h-[1100px] flex rounded-[30px] flex-row max-md:flex-col justify-center items-center justify-evenly`}>
          {reverse ? null : (<PhoneCard/>)}
          <div className='flex flex-col justify-evenly max-[360px]:ml-6'>
            <h1 className={`text-${props.textColor} ${sectionTitleStyle}`}>{props.index}</h1>
            <h1 className={`text-${props.textColor} ${sectionTitleStyle}`}>{props.title}</h1>
            <p className={`text-${props.textColor} ${sectionTextStyle}`}> {props.description1}.</p>
          <p className={`text-${props.textColor} ${sectionTextStyle}`}> {props.description2}</p>
          { props.primary ? <PrimaryButton value="Get Convioo for free"/>:
            <SecondaryButton value="Get Convioo for free" bg={true}/>
            }
          </div>
          {reverse ? (<PhoneCard/>) : null}
            
        </div>


    
  )
}

export default  SectionWrapper(IntroSection);