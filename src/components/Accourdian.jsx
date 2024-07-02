import React, { useState } from 'react'
import Panel from './Panel'

export default function Accourdian() {
    const[activeIndex,setActiveIndex]=useState(0)

    const handleActive=(activeIndex)=>{
         setActiveIndex(activeIndex)
    }

  return (
    <>
      <h2>Learn With Jillur</h2>
      <Panel title='Paid Cource' isActive={activeIndex==1 && true} onActive={()=>handleActive(1)}/>
      <hr/>
      <Panel title='Free Cource' isActive={activeIndex==0 && true} onActive={()=>handleActive(0)}/>
      
    </>
  )
}
