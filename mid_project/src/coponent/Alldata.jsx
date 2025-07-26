import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const Alldata = () => {
    const API_URL='http://localhost:3001/user'
    const[users,setuser]=useState([]);
    useEffect(()=>{

        const fetchdata=async()=>{
            const response=await axios.get(API_URL);
            setuser(response.data);
              
            
        }
      
        fetchdata();

    },
[])
console.log(users)
  return (
    <>
    <h1>All data are</h1>
    {users.length===0?(
        <h1>no data</h1>
    ):(
        users.map((u,i)=>(
            <h1>{u.name}</h1>
        ))
    )}
    
    
    </>
  )
}

export default Alldata