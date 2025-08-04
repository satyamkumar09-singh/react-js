import React from 'react'
import { useContext } from 'react';
import { myprovider } from '../App';
 const Child3 = () => {
    const name=useContext(myprovider)
    const myprovider
  return (
    <>
    <h1>hello mai child 3 hu</h1>
    <h1>name:{props.val1}</h1>
    <h1>your  mobile:{mobile}</h1>
    </>
  )
}
export default Child3;