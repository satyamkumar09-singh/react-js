
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';

const product = () => {
    let [product,setproduct]=useState([]);
        const API_URL='http://localhost:3002/products'

        useEffect(()=>{
            const fetchdata=async()=>{
                try{
                    let response=await axios.get(API_URL)
                    setproduct(response.data);
                }
                catch(error){
                    console.log(error);
                }
            }
            fetchdata();
        },[])
        console.log(product)
    
  return (
   <>
   <h1>our product</h1>
   {
    product.map((e,i)=>(
        <>
        <img src={e.image} alt="" height="200px" width="200px" />
        <p>{e.price}</p>
        </>
    ))
   }
   </>
  )
}

export default product