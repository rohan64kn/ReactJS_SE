import React from "react";
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./forRouter/Home";
import About from "./forRouter/About";
import Contact from "./forRouter/Contact";
export default function Nine()
{
  return(
  <div>
    <BrowserRouter>
    <nav>
        <ul>
        <li>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
        </li>
        </ul>
    </nav>
    <Routes>
    <Route path='/' element = {<Home/>}></Route>
    <Route path='/contact' element = {<Contact/>}></Route>
    <Route path='/about' element = {<About/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  )
}