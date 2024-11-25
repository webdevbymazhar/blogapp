"use client"
import React, { useEffect } from 'react'
import "./admin.css"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const AdminLayout = ({children}) => {

  let router = useRouter()

  let token = localStorage.getItem("blogapptoken")

  let LogOut = () =>{
    localStorage.removeItem("blogapptoken")
    router.push("/login")
  }

  useEffect(()=>{
  if(!token){
router.push("/login")
  }
  },[])
  return (
    <div>
      <div className='dashboard-wrapper' >

        <div className='sidebar'>
         
         <h1 style={{color:"white"}}>Blog App</h1>

         <div>
          <ul className='unordered-list'>
            <li className='list-item'><Link href={`/admin`}>Dashboard</Link></li>
            <li className='list-item'><Link href={`/admin/blogs`}>Blogs</Link></li>
            <li className='list-item'><Link href={`/admin/create`}>Create Blog</Link></li>
            <li className='list-item'><Link href={`/admin/settings`}>Settings</Link></li>

          </ul>
         </div>

         <button onClick={LogOut} className='logOutBtn'>Log Out</button>
        
        </div>


        
        <div className='page'>
            {children}
        </div>
      
      </div>
    </div>
  )
}

export default AdminLayout
