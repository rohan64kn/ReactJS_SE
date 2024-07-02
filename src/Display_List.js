import React from "react";
export default function Four()
{
    const fruits = ['Mango', 'Orange', 'Peach', 'Banana', 'Guava']
  return(

<ul>
<p>The list of fruits are:</p>
    {fruits.map((fruits, index)=>
    <li key={index}>{fruits}</li>   
)}
</ul>
  )
}