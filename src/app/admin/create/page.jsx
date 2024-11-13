"use client"
import React, { useState } from 'react'
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';


const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false
});


const Create = () => {
  const [value, setValue] = useState('');
  return (
    <div className='create-blog-wraper'>
      <h2>Create Blog Page</h2>
      <hr style={{marginTop:"10px"}} />
      <div style={{width:"50%", marginTop:"5vh"}}>
      <form style={{display:"flex",flexDirection:"column", gap:"5vh"}} >

<input type="file" placeholder='Enter Blog Title..' />

<div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
<label htmlFor="">Title:</label>
<input style={{padding : "10px 5px"}} type="text" placeholder='Enter Blog Title..' />
</div>

<div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
<label htmlFor="">Category:</label>
<select style={{padding : "10px 5px"}} >
  <option value="">Technology</option>
  <option value="">Cars</option>
  <option value="">Football</option>
  <option value="">lectronics</option>

</select>
</div>

<div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
<label htmlFor="">Content:</label>
<ReactQuill style={{height:"25vh"}} theme="snow" value={value} onChange={setValue} />
</div>

<button style={{marginTop:"30px"}} className='logOutBtn'>Submit</button>






</form>
      </div>
    </div>
  )
}

export default Create
