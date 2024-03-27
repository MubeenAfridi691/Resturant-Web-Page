import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
import { FaArrowLeft } from "react-icons/fa6";



export default function Topfoods() {
    const [data, setData] = useState([])
    const [slide, setSlide]=useState(0)

     const next=()=>{
     if(slide.length -6 ==slide)return false
         setSlide(slide+2)
     }
     const prev=()=>{
      if(slide ==0)return false
          setSlide(slide-2)
      }


    useEffect(() => {
      const fetchdata = async () => {
        try {
          const api = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s");
          setData(api.data.meals)
          console.log(data)
        } catch (error) {
          console.log(error)
        }
      };
      fetchdata();
    },[setData]);
  return (
    <> <div className='max-w-[1200px] -z-10 mx-auto'>
    <div className='flex my-3 justify-between items-center'>
        <div className='text-[30px] font-bold'>Top restaurant chains in Peshawar</div>
        <div className='flex item-center'>
        <div className='w-[30px] mx-5 h-[30px] cursor-pointer rounded bg-[#DFDFE4]]'><FaArrowRight onClick={next} fontSize={40}/></div>
        <div className='w-[30px] h-[30px] cursor-pointer rounded bg-[#DFDFE4]]'><FaArrowLeft onClick={prev} fontSize={40}/></div>
        </div>
        </div>  
    <div className='flex overflow-hidden '>
        
    {data.map((p)=>{
    return(
<div className='flex-grow w-[300px] shrink-0  -z-10	 relative	 duration-500'
style={{transform:`translateX(${slide*-100}%)`}}

>
<img className=' hover:scale-110 w-[350px] h-[300px]]  px-[15px]  rounded-lg' src={p.strMealThumb} alt="" />
  <div className='absolute bottom-[60px] left-5 tracking-tighter	 font-semibold text-[25px] text-[#324aa8]' style={{'font-family': "Basis Grotesque Pro"}}>20% OFF UPTO ₹50</div>
  <div className='font-bold text-[20px] text-[blue] text-center 	 inline'>{p.strArea} <FcRating />
</div>
</div>
        
    )
})}             
</div>       
</div></>
  )
}
