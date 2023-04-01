import React, { useState }  from 'react'
import "./NewStartersStyle.css";
import emp1 from "../../Images/emp1.jpg";


function NewStarters() {
  return (
    <div>
         <p className="text-new-starters">New Starters</p>
         <div className="NewStarters">
              <img src={emp1} className="EmpImage1" />

              <h1 className="h1-newstarter">Welcome On Board</h1>
              <p className="p-newstarter">Tina M joined as a Software Developer</p>
              <div className="EmpDetailsBox"> </div>
         </div>

    </div>
  )
}

export default NewStarters