import Image from "next/image";
import Link from "next/link";
import React from 'react'


const Home = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
    <div className="">
     <h1 className="text-6xl md:text-[80px] font-bold my-4 tracking-wider headeline_text"> Creative <br/> Thoughts <br/> Agency</h1>
       <p className="py-4 text-xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui aliquam vitae, veritatis aspernatur expedita quas nesciunt eius odio quibusdam ex, itaque adipisci.</p>
    <div className="mb-4">
      <Link href={"/"}>
      <button className="bg-blue-600 p-2 rounded-md ">Learn More</button>
      </Link>
    
    <Link href={"/contact"}>
    
     <button className="bg-white text-black p-2 ml-4 w-[120px] rounded-md ">Contact</button> 
    
    </Link>
    </div>
    <div className="w-full ">
      <Image src="/images/brands.webp" alt="brand" height={50} width={500}/>
    </div>
  </div>
  <div className="w-full ">
  <Image src="/images/hero.gif" alt="hero-section"
  width={500}
  height={500}
  />
  
  </div>
</div>
    
  )
}

export default Home
