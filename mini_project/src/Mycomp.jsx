import React from 'react'

const Mycomp = (props) => {
  return (
    <>
    <h1>this component is a child of about component</h1>
    <h1>{props.data2}</h1>
    </>
  )
}

export default Mycomp