import React from 'react'
import { NavLink } from 'react-router-dom'
import "./ValuesStyle.css";

const Values = () => {
    return (
        <div>
            <NavLink to="/values">
                <div className="values">
                   <h3 className="h3-values">Our Values</h3>
                </div>
             </NavLink>
        </div>
      )
}

export default Values