import React from 'react'
import {boneWhite} from '../constants'
import { Link } from 'react-router-dom';
// props : bool border , string path , function clickCallBack , String value
const SecondaryButton = (props) => {
    const border= props.border ? 'border-2' : '';
    const bg=props.bg ? boneWhite : ''
  return (
 <Link to={props.path} >
    <div className={`${bg} h-[48px] text-black w-fit
     flex justify-center items-center flex-row 
    px-[12px] py-[16px] gap-10 relative 
     rounded-[6px] ${border} border-[#080807] text-base font-inter font-medium

        `}
        onClick={props.clickCallBack}
        
        >
          <h1 className='p-1'>
          {props.value}
          </h1>
          
          
          </div>
        </Link>
  )
}

export default SecondaryButton