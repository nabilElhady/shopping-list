import React from 'react'
import Form from './Form'
import Last from './Last'
export const Items = ({dis,setdis,state,setstate,clicked,arr,settarr,settotal,total}) => {
    return (
        <div>

    {arr.map((elem)=>(
        <Last dis={dis} setdis={setdis} state={state} setstate={setstate} total={total} settotal={settotal} text={elem.text}elem={elem} items={elem.items} settarr={settarr} arr={arr} ></Last>   
        
        ))}
        </div>
  
  )
}
export default Items