import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import '../App'
import { FaSearch } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoy } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";






export default function Header() {
  const [toggle, setToggle]=useState(false)

  const showtoggle=()=>{
    setToggle(!toggle)
    console.log('click')
  }
const hidetoggle=()=>{
  setToggle(false)
}

const links=[
  {
    icon:<FaSearch />,
    name:'Search'
  },
  {
    icon:<CiDiscount1 />,
    name:'Offers',
    sup:'New'
  },
  {
    icon:<IoHelpBuoy />,
    name:'Help'
  },
  {
    icon:<FaRegUser />,
    name:'Sign In'
  },
  {
    icon:null,
    name:'Cart'
  },
]

  return (
    <>
        <div className="overlay w-full h-full stick top-0 z-[9999] fixed" onClick={hidetoggle} style={{
          opacity:toggle? 1:0,
          visibility:toggle?'visible':'hidden'
        }}>

        
        </div>
        <div className="w-[500px] h-full bg-black absolute duration-[600ms] "
        style={{
          left:toggle? '0%':'-1000%'
        }}
        ></div>
      <header className="black-overlay bg-[white] sticky top-0 z-[9999] p-[15px] shadow-xl ">
        <div className="max-w-[1400px]  flex items-center mx-auto">
          <div className="w-[100px]">
            <img src="./image/logo.png.png" className="w-full hover:scale-110					" alt="" />
          </div>
          <div className="flex mx-[5px]">
            <span className="font-bold mx-[5px] border-b-[3px] border-b-[black]">
              Other
            </span>
            Kartavya Path, India Gate, New Delhi{" "}
            <FaCaretDown
              className="mx-[5px] cursor-pointer font-bold text-[#ecf542]"
              fontSize={25}
              onClick={showtoggle} />
          </div>
          <nav className="flex ml-auto font-semibold gap-10 list-none text-[18px]">
            {
              links.map((nav,index)=>{
                return(
                  <>
                  <li key={index} className="flex items-center  hover:text-[#fc8019] gap-2">
                    {nav.icon}
                    {nav.name}
                    <sup>{nav.sup}</sup>

                  </li>
                  </>
                )
              })
            }
          </nav>
        </div>
      </header>
     
      
    </>
  );
}
