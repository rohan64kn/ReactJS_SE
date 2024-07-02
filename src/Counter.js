import React, { useState } from "react";
export default function Two()
{
    const [Count, setCount] = useState(0);
  return(
  <div>
    <button onClick={()=>setCount(Count-1)}>-</button>
    <span>{Count}</span>
    <button onClick={()=>setCount(Count+1)}>+</button>
  </div>
  )
}