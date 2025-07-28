import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import '../mycss/style.css'
// import { useNavigate } from 'react-router-dom'

const Superdashboard = () => {
//   const navigate=useNavigate();
  let API_URL='http://localhost:3001/user'
  let [initialdata,updatedata]=useState([]);
     const fetchdata=async()=>{

      try {
        let response= await axios.get(API_URL);
        updatedata(response.data)
      } catch (error) {
        console.log(error);
      }

    }
  useEffect(()=>{
 
    fetchdata();

  },[])
  //console.log(initialdata);
  //delete function start
  const userDelete=async(id)=>{
    let cnf=window.confirm("are you sure want to delete");
    if(!cnf) return;
   try {
     await axios.delete(`${API_URL}/${id}`)
     fetchdata();
   } catch (error) {
    console.log(error)
   }
  }
  //delete function end
  //Update function start

  //Update function end
  const[formdata,setformdata]=useState({
    name:"",
    email:"",
    mobile:"",
    password:""
  });

  const handlechange=(e)=>{
    const{name,value}=e.target;
    setformdata((prev)=>(
      {...prev,
        [name]:value
      }
    ))

  }
  const [userid,setuserid]=useState(null);
  const updateuser=async(e)=>{
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${userid}`,formdata);
      setuserid(null);
      //navigate('/super')
      fetchdata();
     
      
    } catch (error) {
      console.log(error)
    }

  }
  
    const userUpadte=(id)=>{
    setuserid(id);
    const user=initialdata.find((u)=>u.id==id);
    setformdata({
      name:user.name || '',
      email:user.email || '',
      mobile:user.mobile || '',
      password:user.password || ''
    })
  }

  return (
    <>
    {userid ? (
      <>
      <h1>Updated form</h1>
      <form action="" onSubmit={updateuser}>
      <fieldset>
        <legend>Myform</legend>
        <input type="text" name='name' value={formdata.name} placeholder='Name' onChange={handlechange}/> <br />
        <input type="text" placeholder='Email' name='email' value={formdata.email} onChange={handlechange}/> <br />
        <input type="text" placeholder='Mobile'name='mobile' value={formdata.mobile} onChange={handlechange}/> <br />
        <input type="text" placeholder='Password' name='password' value={formdata.password} onChange={handlechange}/>  <br />
        <button>Signup</button>
        <h1>Your name:{formdata.name}</h1>
          <h1>Your name:{formdata.email}</h1>

        <h1>Your name:{formdata.mobile}</h1>

        <h1>Your name:{formdata.password}</h1>

      </fieldset>
    </form>
    </>
    ):(
      <>
      <h1>Admin Dashboard</h1>
    <table className='vtable'>
      <tr>
        <th>ID</th>
        <th>name</th>
        <th>email</th>
        <th>mobile</th>
        <th>password</th>
        <th>action</th>
      </tr>
      {
        initialdata.map((e,i)=>(
          <tr key={i}>
            <tr>{e.id}</tr>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.mobile}</td>
            <td>{e.password}</td>
            
            <td><button onClick={()=>userUpadte(e.id)}>update</button></td>
            <td><button onClick={()=>userDelete(e.id)}>delete</button></td>
          </tr>
        ))
      }
    </table>
  </>
    )}
    </>
  )
}

export default Superdashboard