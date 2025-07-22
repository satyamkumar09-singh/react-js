import React, { useState } from 'react'

const page2 = () => {
    const[formdata,updateformdata]=useState({
        name:"",
        email:"@gmail.com"
    })
    const handlechange=(e)=>{
        const {name,value}=e.target;
        updateformdata((prev)=>({
            ...prev,
            [name]:value
        }))
    }
  return (
    <>
    <h1>this is usestate,useeffect and json-server class</h1>
    <form action="">
        <input type="text" name='name' value={formdata.name} />
        <input type="text" name='email' value={formdata.name} />
    </form>
    </>
  )
}

export default page2