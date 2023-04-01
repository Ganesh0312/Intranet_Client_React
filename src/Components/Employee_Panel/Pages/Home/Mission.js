import React from 'react'
import { NavLink } from 'react-router-dom'
import "./MissionStyle.css";

const Mission = () => {
    return (
        <div>
            <NavLink to="/mission">
                <div className="mission">
                   <h3 className="h3-mission">Our Mission</h3>
                </div>
             </NavLink>
        </div>
      )
}

export default Mission