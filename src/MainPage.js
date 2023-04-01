import React from 'react'
import { NavLink} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//import Home from './components/Pages/Home/Home';
import Home from './Components/Employee_Panel/Pages/Home/Home';
import News from './Components/Employee_Panel/Pages/News';
import Social from './Components/Employee_Panel/Pages/Social';
import People from './Components/Employee_Panel/Pages/People';
import Stories from './Components/Employee_Panel/Pages/Stories';
import Documents from './Components/Employee_Panel/Pages/Documents';
import Profile from './Components/Employee_Panel/Pages/Profile';

function MainPage() {
   return (
<>
<Router>
            <Routes>
                   <Route path='/Home' element={<Home />} />
                EmployeeHome page
                   <Route path='/Home' element={<Home />} />
                   <Route path='/News' element={<News/>} />
                   <Route path='/Social' element={<Social />} />
                   <Route path='/People' element={<People />} />
                   <Route path='/Stories' element={<Stories />} />
                   <Route path='/Documents' element={<Documents />} />
                   <Route path='/Profile' element={<Profile />} />

            </Routes>
    <div>
            <NavLink to='/Home'>
                    <button style={{color:"white", background:"#091351", padding:"5px 10px 5px 10px", marginLeft: 600, borderRadius:5, border:"none", height:30}}>
                    Employee Page
                    </button>
            </NavLink>

           
    </div>
</Router>
</>
  );
}

export default MainPage;