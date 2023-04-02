import './App.css';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppLayout from "./Components/Admin_Panel/layout/AppLayout";
import EmployeeList from "./Components/Admin_Panel/EmployeeList";
import NewsList from "./Components/Admin_Panel/NewsList";
import DocumentList from "./Components/Admin_Panel/DocumentList";
import ImageList from "./Components/Admin_Panel/ImageList";
import Department from "./Components/Admin_Panel/Department";
import Designation from "./Components/Admin_Panel/Desihnation";
import MainPage from "./MainPage";



function App() {
  return (
    <>
    {/*  

   <BrowserRouter>
    <Routes>
        <Route path='/' element={<AppLayout />}>
            <Route index element={<EmployeeList />} />
            <Route path='/Department' element={<Department />} />
            <Route path='/Designation' element={<Designation />} />
            <Route path='/News' element={<NewsList />} />
            <Route path='/Images' element={<ImageList />} />
            <Route path='/Document' element={<DocumentList />} />
        </Route>
    </Routes>         
</BrowserRouter> */}

  <MainPage />
          
{/*<BrowserRouter>

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
</BrowserRouter>*/}
        

</>
  
  );
}

export default App;
