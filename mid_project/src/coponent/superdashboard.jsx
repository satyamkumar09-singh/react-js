import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import '../mycss/style.css'

const superdashboard = () => {
    let API_URL='http://localhost:3001/user'
    let [initialdata,updatedata]=useState([]);
    useEffect(()=>{
        const fetchdata=async()=>{
            try{
                let response=await axios.get(API_URL);
                updatedata(response.data)
               }
                catch (error){
                    console.log("data not found")
                }
            
            fetchdata();
        }
},[])
//console.log(initialdata);
  return (
    <>
    <h1>admin dashboard</h1>
    <table>
        <tr>
            <th>name</th>
            <th>email</th>
            <th>mobile</th>
            <th>password</th>
        </tr>
        {
            initialdata.map((e,i)=>(
                <tr>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.password}</td>
                    
                    <td><button1>update</button1></td>
                    <td><button1>delete</button1></td>
                </tr>
            ))
        }
    </table>
    </>
  )
}

export default superdashboard