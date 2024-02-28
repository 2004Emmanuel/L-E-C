import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='text'>
        <div className=''>
          <h3 className='text-blue-600 font-bold text-xl my-4'>About Agency</h3>
          <h1 className='mb-4 font-bold text-5xl '>We create digital ideas that are bigger, bolder, braver and better.</h1>
          <p className='text-xl py-4'>We specialize in crafting digital concepts that are not only expansive but also daring, innovative, and superior. At the core of our philosophy lies a firm belief in the power of adaptable and precise ideas. Our expertise spans across the globe, where we stand out as leaders in providing top-tier consulting and finance solutions. With a diverse portfolio, we excel in web and software development, offering a wide spectrum of services tailored to meet your needs.</p>
        </div>
       <div className='flex items-center justify-between'>
       <div className=''>
       <h1 className='font-bold text-blue-600 text-lg'>10 K+</h1>
       <p>Years Of Experience</p>
       </div>
       <div className=''>
       <h1 className='font-bold text-blue-600 text-lg'>234 k+</h1>
       <p>People Reached</p>
       </div>
       <div className=''>
       <h1 className='font-bold text-blue-600 text-lg'>5 k+</h1>
       <p>Service And Plugins</p>
       </div>
       </div>
        
      </div>
      <div className='mt-4'>
      <Image src="/images/about.jpg" alt="about_us_image" height={500} width={500}/>
      </div>
      
    </div>
  )
}

export default About
