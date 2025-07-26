import React from 'react'
import img1 from './assets/img1.jpeg'
const Home = (props) => {
    let x="400px";
    let y="400px"
  return (
    <>
    <h1>Yaha home page banega</h1>
    <img src="myimages/img2.jpeg" alt="" height={x} width={y}/>
    <img src={img1} alt="" />
    <h1>{props.name}</h1>
    </>
  )
}

export default Home