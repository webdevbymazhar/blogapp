"use client"
import React, { useState } from 'react';
import "./Login.css"
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        let response = await axios.post("/api/auth/login",{
            email,password
        })
        if(response.status === 401){
            alert("Invalid Credentials!")
        }

        if(response.status === 200){
            localStorage.setItem("blogapptoken",response.data.token)
            router.push("/admin")

        }
        
    } catch (error) {
        console.log(error);
        
    }
  };

  return (
   <>
   <Navbar/>
    <div className={"container"}>
      <form className={"form"} onSubmit={handleSubmit}>
        <h1 className={"title"}>Login</h1>
        <label className={"label"} htmlFor="email">
          Email:
        </label>
        <input
          className={"input"}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className={"label"} htmlFor="password">
          Password:
        </label>
        <input
          className={"input"}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className={"button"}>
          Login
        </button>
      </form>
    </div></>
  );
}
