import React, { useEffect, useState } from "react";
export default function Six()
{
    const[data,setData]= useState(null);
    useEffect(()=>
        {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((Response)=> Response.json())
            .then((data)=> setData(data))
        },[])
  return(
  <div>
    {data?
    (
        <div>
            <h1>{data.title}</h1>
            <h2>{data.body}</h2>
        </div>
    )
    : (
        <p>No data</p>
    )}
  </div>
  )
}