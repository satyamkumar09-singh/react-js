import React from 'react'
import { data } from 'react-router-dom'
import Mycomp from './Mycomp'
const About = (props) => {
  let data1=props.data
  return (
    <div>
        <h1>yaha about section tum bana kar laoge</h1>
        <p>
          <h1>vednat</h1>
          <h1>{data1}</h1>
          <img src={data1[0]} alt="" />
        
        </p>
        <Mycomp data2={data1}/>
    </div>
  )
}

export default About