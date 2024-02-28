import React from 'react'
import { FaBuildingNgo } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='text-gray-400 flex items-center justify-between py-2'>
    
    <div className=''> 
    <FaBuildingNgo size={25} /> 
    </div>
    <div className=''>  All rights reserved  &copy{
      new Date().getFullYear()
    }</div>
   
      
    </div>
  )
}

export default Footer
