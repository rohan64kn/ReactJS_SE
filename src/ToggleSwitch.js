import React, { useState } from "react";
export default function Five()
{
    const [isToggled, setToggled] = useState(false);
    const handleToggle = () =>
        {
            setToggled(!isToggled);
        }
  return(
  <div>
    <label>
        <input type='checkbox' onChange={handleToggle}/>
    </label>
    <p>{isToggled? "On" : "Off"}</p>
  </div>
  )
}