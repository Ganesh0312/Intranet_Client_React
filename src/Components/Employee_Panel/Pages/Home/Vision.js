import React from 'react'
import { NavLink } from 'react-router-dom'
import "./VisionStyle.css";

const Vision = () => {
    return (
        <div>
            <NavLink to="/vision">
                <div className="vision">
                   <h3 className="h3-vision">Our Vision</h3>
                </div>
             </NavLink>
        </div>
      )
}

export default Vision