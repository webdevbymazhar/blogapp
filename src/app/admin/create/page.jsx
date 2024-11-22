"use client"
import React, { useState } from 'react'
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import { CldUploadWidget } from 'next-cloudinary';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false
});






const Create = () => {
  const [value, setValue] = useState('');
   const [data,setdata] = useState({
    image : "",
    title : "",
    category : "",
   })

   let router = useRouter()


   let OnChangeHandler = (e) =>{
    setdata({ ...data, [e.target.name]: e.target.value });
    
    // console.log({...data, [e.target.name]: e.target.value })
     
   }


   let submitData = async (e) =>{
    e.preventDefault()

    try {
      let response = await axios.post("/api/blog",{
        ...data, description : value
      })
      
        router.push("/admin/blogs")
      

     
      
      
    } catch (error) {
      console.log(error);
      
    }
    
    
   }


   

  return (
    <div className='create-blog-wraper'>
      <h2>Create Blog Page</h2>
      <hr style={{marginTop:"10px"}} />
      <div style={{width:"50%", marginTop:"5vh"}}>
      <form style={{display:"flex",flexDirection:"column", gap:"5vh"}} >

      <CldUploadWidget
                    cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                    uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                    onSuccess={(results) => {
                      if (results.info?.secure_url && results.event === "success") {
                        setdata((data) => ({
                          ...data,
                          image: results.info.secure_url,  
                        }));
                      }
                    }}
                  >
                    {({ open }) => (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          open();
                        }}
                        style={{height:"40px", backgroundColor:"black"}}
                      >
                        <span style={{color:"white"}} className="">Add Image</span>
                      </button>
                    )}
                  </CldUploadWidget>

                  <div>
                    {
                      data.image ? <img style={{width:"200px",height:"200px",objectFit:"cover"}} src={data.image} alt="" /> : <p>No Image Selected</p>
                    }
                  </div>

<div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
<label htmlFor="">Title:</label>
<input onChange={OnChangeHandler} style={{padding : "10px 5px"}} name='title' value={data.title} type="text" placeholder='Enter Blog Title..' />
</div>

<div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
<label htmlFor="">Category:</label>
<select onChange={OnChangeHandler} value={data.category} name='category'  style={{padding : "10px 5px"}} >
  <option value="technology">Technology</option>
  <option value="cars">Cars</option>
  <option value="football">Football</option>
  <option value="electronics">electronics</option>

</select>
</div>

<div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
<label htmlFor="">Content:</label>
<ReactQuill style={{height:"25vh"}} theme="snow" value={value} onChange={setValue} />
</div>

<button onClick={submitData} style={{marginTop:"30px"}} className='logOutBtn'>Submit</button>






</form>
      </div>
    </div>
  )
}

export default Create
