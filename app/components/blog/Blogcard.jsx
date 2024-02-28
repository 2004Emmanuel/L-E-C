import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blogcard = ({ x }) => {
  return (
    <div>
      <div className=' broder border-white border-2 p-4 rounded-sm'>
       <Image src={"/images/about.jpg"} alt="post" width={500} height={500}/>
       <h1 className='mt-2 font-bold'>{x.title}</h1>
       <p className='text-gray-500 my-2 text-lg '>{x.body.slice(0,100)}...</p>
       <Link className='bg-blue-600 rounded-sm w-full p-2 my-2' href={`/blog/${x.id}`}
       >
       Read More</Link>
      </div>
    </div>
  )
}

export default Blogcard
