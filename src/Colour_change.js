import React, { useState } from "react";
export default function Eight()
{
    const [backgroundColor, setBackgroundcolor] = useState('white');
    const handleClick = ()=>
        {
            const newColor = backgroundColor=== 'white' ? 'blue' : 'green';
            setBackgroundcolor(newColor);
        }
  return(
  <div onClick={handleClick} style={{
    backgroundColor,
    height: '100px',
    width: '200px',
    cursor: 'pointer'
  }}>
    Click me to change color
  </div>
  )
}