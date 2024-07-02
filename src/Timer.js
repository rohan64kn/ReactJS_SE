import React, { useEffect, useState } from "react";
export default function One()
{
  const[input, setInput]= useState();
  useEffect(()=>
  {
    if (input>0)
    {
      const timer = setTimeout(()=>setInput(input-1),1000);
      return()=>clearTimeout(timer);
    }  
  })
  return(
  <div>
    <input type='integer' onChange={(e)=>setInput(e.target.value)}/>
    Time left: {input} second
  </div>
  )
}