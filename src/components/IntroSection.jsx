import React , {useRef} from 'react';
import SectionWrapper from '../hoc/SectionWrapper';
import PhoneCard from './PhoneCard';
import SecondaryButton from './SecondaryButton';
import { sectionTitleStyle, sectionTextStyle } from '../constants'; 
import PrimaryButton from './PrimaryButton';
import { fadeIn } from '../utils/motion';
import { motion , useInView  } from 'framer-motion';
const IntroSection = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
    const reverse=props.reverse;
    const direction = reverse ? "right" : "left";
  return (
    
        <div className={`bg-${props.bg} h-[750px] max-md:h-[1100px] flex rounded-[30px] flex-row max-md:flex-col justify-center items-center justify-evenly`}>
          {reverse ? null : (
          <motion.div ref={ref}
          initial="hidden"
          animate={isInView ?"show" : "none"}
          variants={fadeIn("right","tween",0.2,0.5)}
          className='w-fit h-fit'
      >
          <PhoneCard/>
          </motion.div>)}
          <motion.div ref={ref}
        initial="hidden"
        animate={isInView ?"show" : "none"}
        variants={fadeIn(direction,"tween",0.2,0.5)}
        className='w-fit h-fit'
    >
          <div className='flex flex-col justify-evenly max-[360px]:ml-6'>
            <h1 className={`text-${props.textColor} ${sectionTitleStyle}`}>{props.index}</h1>
            <h1 className={`text-${props.textColor} ${sectionTitleStyle}`}>{props.title}</h1>
            <p className={`text-${props.textColor} ${sectionTextStyle}`}> {props.description1}.</p>
          <p className={`text-${props.textColor} ${sectionTextStyle}`}> {props.description2}</p>
          { props.primary ? <PrimaryButton value="Get Convioo for free"/>:
            <SecondaryButton value="Get Convioo for free" bg={true}/>
            }
          </div>
          </motion.div>
          {reverse ? (
          <motion.div ref={ref}
          initial="hidden"
          animate={isInView ?"show" : "none"} 
          variants={fadeIn("left","tween",0.2,0.5)}
          className='w-fit h-fit'
      >
          
          <PhoneCard/>
          </motion.div>
          ) : null}
            
        </div>


    
  )
}

export default  SectionWrapper(IntroSection);