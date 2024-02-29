"use client"
import React, { useEffect, useState } from 'react'
import Blogcard from './Blogcard'

const url = "https://jsonplaceholder.typicode.com/posts"

const getPosts = async () =>{
  const res = await fetch(url)
  if(!res.ok){
    throw new Error("failed to fetch data from an API given above")}
  
  return res.json()
}

const Blog = () => {
  const [posts, setposts] = useState([]);
  useEffect(() =>{
    const fetData = async () => {
      const data = await getPosts();
      setposts(data);
    }
    fetData()
  }, [])
 
  
  console.log(posts)
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-4 gap-4 py-4'>
    {posts.map((x, index) => (
      <Blogcard x={x} key={index} />
    ))}
    </div>
  )
}

export default Blog
