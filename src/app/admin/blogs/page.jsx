"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {

    let [data,setdata] = useState([])

    const fetchBlogs = async () =>{
     try {
        let blogs = await axios.get("/api/blog")
        setdata(blogs.data.blogs);
        
     } catch (error) {
        console.log(error);
        
     }
    }

    let deleteBlog = async (id) =>{
        try {
            let deleted = await axios.delete(`/api/blog/${id}`)
            if(deleted){
                fetchBlogs()
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
fetchBlogs()
    },[])

  return (
    <div style={{padding:"20px"}}>
      <table className='blog-table'>
        <thead>
        <tr>
            <th>Title</th>
            <th>description</th>
            <th>category</th>
            <th>Option</th>
        </tr>
        </thead>
        <tbody>
        {
            data.map((blog)=>{
                return <tr>
                <td>{blog.title}</td>
                <td><div dangerouslySetInnerHTML={{__html:blog.description}}></div></td>
                <td>{blog.category}</td>
                <td>
                    <Link href={`/admin/update/${blog._id}`}>Update</Link>
                    <button onClick={()=>deleteBlog(blog._id)}>Delete</button>
                </td>
            </tr>
            })
        }
        </tbody>
      </table>
    </div>
  )
}

export default page
