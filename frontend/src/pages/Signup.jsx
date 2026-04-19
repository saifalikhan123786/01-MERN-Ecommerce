import { useState } from "react";
import api from "../api/axios";

export default function Signup(){
    const[form,setForm]=useState({
        name:"",
        email:"",
        password:""
    })
    const[msg,setMsg]=useState("");

    const handleChange=async(e)=>{

    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
    }
     
    return(
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
       <h2 className="text-2xl font-bold mb-6 text-center">Creaet Account</h2> 
        
        // Cheack Error msg

       {msg &&(
        <div className="mb-4 text-center text-sm text-blue-600 font-medium">
        {msg}
        </div>
       )}

       // Form submit 
       <form onSubmit={handleSubmit} className="space-y-4">
        <input 
        name="name"
        placeholder="Enter Name"
        value={form.name}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus: ring-blue-500"
        required 
        />
        
        // Email

        <input 
        name="email"
        placeholder="Enter Email"
        value={form.email}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus: ring-blue-500"
        required 
        />

        // Password
         
         <input 
        name="password"
        placeholder="Enter Password"
        value={form.password}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus: ring-blue-500"
        required 
        />
         
         // Button 
         <button 
         type="submit"
         className="w-full bg-blue-500 text-white"

       </form>

      </div>
      </div>
    );

}