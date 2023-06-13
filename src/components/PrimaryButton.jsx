import React from 'react';
import { Link } from 'react-router-dom';


// props : string path , function clickCallBack , String value
const PrimaryButton = (props) => {
  return (
    <Link to={props.path} >
    <div className="w-[187px] h-[48px] bg-[#080807] text-white flex justify-center items-center flex-row
    px-[12px] py-[16px] gap-10 relative rounded-[6px] text-base font-inter font-normal

        "
        onClick={props.clickCallBack}
        >{props.value}</div>
        </Link>
  )
}

export default PrimaryButton