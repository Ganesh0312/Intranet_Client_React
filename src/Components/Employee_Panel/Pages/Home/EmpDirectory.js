import React from 'react'
import { NavLink } from 'react-router-dom'
import "./EmpDirectoryStyle.css";

function EmpDirectory() {
  return (
    <div>
    <p className="text-emp-directory">Employee Directory</p>
         <div className="EmpDirectory">
         <NavLink to="/employee_directory">
         <input type="button" value="View All" className="emp-btn"/>
              </NavLink>
               
         </div>

    </div>
  )
}

export default EmpDirectory