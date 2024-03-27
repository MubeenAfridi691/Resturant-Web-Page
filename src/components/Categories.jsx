 import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { Data } from './Data';

 export default function Categories() {
    const [slide, setSlide]=useState(0)
    console.log(Data.length)

     const next=()=>{
         if(slide.length -6 ==slide)return false
         setSlide(slide+2)
     }
    const prev=()=>{
        if(slide==0)return false

        setSlide(slide-2)
    }

return(
    <>
    <div className='max-w-[1200px] mx-auto'>
        <div className='flex my-3 justify-between items-center'>
            <div className='text-[30px] font-bold'>What is on your mind?</div>
            <div className='flex item-center'>
            <div className='w-[30px] mx-5 h-[30px] cursor-pointer rounded bg-[#DFDFE4]]'><FaArrowRight onClick={next} fontSize={40}/></div>
            <div className='w-[30px] h-[30px] cursor-pointer rounded bg-[#DFDFE4]]'><FaArrowLeft onClick={prev} fontSize={40}/></div>
            </div>
            </div>  
        <div className='flex overflow-hidden '>
            
        {Data.map((p)=>{
        return(
<div className='flex-grow w-[150px] group shrink-0 duration-500'
style={{transform:`translateX(${slide*-100}%)`}}

>
    <img  src={p.image} alt="" />
</div>
            
        )
    })}             
</div>       
    </div>
    
    </>
  )
}
