"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import "./Blogs.css"

const Blogs = () => {

    let [data,setdata] = useState([])


    let fetchData = async () =>{
        try {
            let res = await axios.get("/api/blog")
            setdata(res.data.blogs)
            
           } catch (error) {
            console.log(error);
           }
    }

    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div className='blogs-wrapper'>
      {
        data.map((blog,i)=>{
            return <div key={i}><Card id = {blog._id} title={blog.title} description={blog.description} image={blog.image} /></div>
        })
      }
    </div>
  )
}

export default Blogs
