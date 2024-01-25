import React from 'react'
import {Outlet,Link} from "react-router-dom";
import './Layout.css'
export default function Layout() {
  return (
   <div>
        <nav>
            <ul>
            <div class="f1">
                <div class="item1"><li><Link to="/">Home</Link></li></div>
                <div class="item1"><li><Link to="about">About</Link></li></div>
                <div class="item1"><li><Link to="contact">Contact</Link></li></div>
                </div>
            </ul>
        </nav>
        
        <Outlet/>
        </div>
      
  )
}
