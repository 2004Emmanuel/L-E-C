import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <div className=''>
      <form action='' className='flex flex-col md:w-[500px] md:m-auto bg-[#272433] p-4'> 
      <input type='text' placeholder='username' className='my-2 p-2 rounded-md text-gray-400 bg-[#2D2B42] outline-none'></input>
      <input type='password' placeholder='password' className=' my-2 p-2 rounded-md text-gray-400 bg-[#2D2B42] outline-none'></input>
      <button className='bg-blue-600 p-2 mt-2 rounded-md'>Login</button>
      </form>
      </div>
    </div>
  )
}

export default LoginPage
