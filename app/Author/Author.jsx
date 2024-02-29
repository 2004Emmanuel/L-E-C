import Image from 'next/image'
import React from 'react'
   
const getAuthor = async (userId) => {
  const res= await fetch(`https://jsonplaceholder.typicode.com/users/${ userId }`);

  if(!res.ok){
    throw new Error("sorry author not found!")
  }
  return res.json()
}

const Author =  async ({ userId }) => {
const author=await getAuthor(userId)
console.log(author)
  return (
    <div>
      <div className='flex items-center '>
        <div className=''>
        <Image src="/images/about.jpg" alt="Author" width={50} height={50} className='rounded-full mr-4' />
        </div>
        <div className='flex items-center'>
        <div  className=' mr-8'>
        <h1>Author</h1>
        <p> {author.name}</p>
        <p>{author.username}</p>
        </div>
        <div  className=''>
        <h1>Time</h1>
        <p> 10,feb 2024</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Author
