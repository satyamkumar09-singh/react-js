import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'


const Superdashboard = () => {
  let API_URL="http://localhost:3005/user"
  let [initialdata,updatedata]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
     try {
      let response=await axios.get(API_URL)
      updatedata(response.data)
     } catch (error) {
      console.log("data not found")
     }

    }
    fetchData()
  },[])

 const userdelete=async(id)=>{
    let cnf=window.confirm("you went sure")
    if(!cnf) return;
    try{
     await axios.delete(${API_URL}/${id})
     fetchData()
    }catch(error){
       console.log(error)
    }
 }


   const userupdate=async(id)=>{
    try {
       
    } catch (error) {
      console.log(error)
    }
   }
 
  return (
    <>
      <h1>this is my superdashboard</h1>
       <table>
      <thead>
          <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>mobile</th>
          <th>password</th>
          <th>action</th>
 
        </tr>
      </thead>
     <tbody>
         {
          initialdata.map((e,i)=>( 
            
            <tr key={i}>
              <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.email}</td>
          <td>{e.password}</td>
          <td>{e.mobile}</td>
          
          <td><button onClick={()=>userdelete(e.id)}>update</button></td>
          <td><button onClick={()=>userdelete(e.id)}>delete</button></td>
        
          </tr>
        
          ))
        }
     </tbody>
       </table>

    </>
  )
}

export default Superdashboard;

// useEffect having the arrow function(()=>{}) and the dependices (means the null array[])
// useeffect is automatic call the function