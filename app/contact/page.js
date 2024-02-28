import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='image'>
      <Image  src="/images/about.jpg" alt='contact' width={500} height={500}/>
      </div>
      <div className='form'>
      <form action=''>
      <input type='text' name='name' placeholder='Name' className='w-full p-2 my-4 bg-gray-700 rounded-sm outline-none '/>
      <input type='text' name='email' placeholder='email' className='w-full p-2 my-4 bg-gray-700 rounded-sm outline-none '/>
      <input type='text' name='phone' placeholder='Phone' className='w-full p-2  my-4 bg-gray-700 rounded-sm outline-none'/>
      <textarea name='message' id='' className='w-full my-4 bg-gray-700 rounded-sm outline-none ' cols="30" rows="10" placeholder='Type message here...'></textarea>
      <button className='w-full bg-blue-600 p-2 rounded-sm'>Send</button>
      </form>
      </div>
    </div>
  )
}

export default Contact
