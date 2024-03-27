import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { FcRating } from "react-icons/fc";


export default function Onlinedelivery() {
    const [data, setData] = useState([])
    const componentRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    const { top } = componentRef.current.getBoundingClientRect();
    if (top <= 1) { // Adjusted to a tolerance level of 1 pixel
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Clean up the event listener on unmount
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

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
    },[setData,axios]);
    console.log(data)

  return (
    
    <div className='max-w-[1200px]  my-5 -z-10 mx-auto' ref={componentRef}>
    <div className=' my-3  ml-0'>
        <div className='text-[30px] my-[50px] mx-auto font-bold'>Top restaurant chains in Peshawar</div>

</div>  
<div ref={componentRef} className={isFixed ? 'fixed top-0 z-[9999999] bg-[white]' : ''}>
<div className='bg-slate-300 gap-3 w-[1400px] mx-auto flex items-center py-[20px]'>
    <div className='rounded '>filter</div>
    <div className='rounded max-w-[1200px] my-[15px]'>filter</div>

    </div>
</div>
        {/* <div className='flex item-center'>
        </div> */}
    <div className=' flex-grow'>
        
<div className='grid grid-cols-4  relative gap-3'>
    {data.map((p)=>{
    return(
        <div>
<img className=' hover:scale-110   px-[15px] rounded' src={p.strMealThumb} alt="" />
<div className='font-bold text-[20px] text-[blue] text-center '>{p.strArea} <FcRating />
</div>
</div>)
})}             
</div>
</div>       
</div>

    
  )
}
