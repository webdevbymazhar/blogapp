"use client"
import Navbar from '@/app/components/Navbar/Navbar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {

    let [data,setdata] = useState("")
    let [loading,setloading] = useState(false)

    let fetchBlog = async ()=>{
        try {
            setloading(true)
            let blog = await axios.get(`/api/blog/${params.id}`)
            setdata(blog.data.blog);
            
        } catch (error) {
            console.log(error);
            
        }finally{
            setloading(false)
        }
    }

    useEffect(()=>{
fetchBlog()
    },[])
  return (
    <div>
      <Navbar/>
      {
        loading ? "loading..." : <div className='blog-wrapper'>
      
        <img className='blog-image' src={data.image} alt="" />
        <h1>{data.title}</h1>
        <h2>{data.category}</h2>
        <div dangerouslySetInnerHTML={{__html:data.description}}></div>
        </div>
      }
    </div>
  )
}

export default page
