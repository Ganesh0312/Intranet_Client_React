//import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

// import { Container } from "react-bootstrap";
import { BsFillEnvelopeFill } from "react-icons/bs";
import "../Pages/FetchAPI.css";


function People()
{
  const [userData, setUserdata]= useState([]);
  const [filterdata, setFilterdata]= useState([]);
  const [query, setQuery] = useState('');
   
  useEffect( ()=>{
    const getUserdata= async()=>{
      const reqData= await fetch("https://localhost:7274/api/Employee");
      const resData= await reqData.json();
      //console.log(resData);
      setUserdata(resData);
      setFilterdata(resData);

    } 
getUserdata();
  },[]);

  const handlesearch=(event)=>{
    const getSearch= event.target.value; 
    if(getSearch.length > 0)
    {     
     const searchdata= userData.filter( (item)=> item.employeeName.toLowerCase().includes(getSearch));
     setUserdata(searchdata);
    } else {
      setUserdata(filterdata);
    }
    setQuery(getSearch);
  }


  return(
    <>
    
    <Navbar />
    <Sidebar />

        <React.Fragment>              
         <Container>
          <div className="container-fluid mt-5"  style={{width:"90%"}}>
    {/*  */}
            <div className='row text-left' >
        <div > 
            <div className='heading'>
              <h3 className='ss' style={{fontSize:"28px", fontWeight:"700"}}>Employee Directory</h3>      
                        
                <div className=''> 
                <div className='search'>
    
                <input className="col-md-3 " type="text" name='name' style={{border:"0.1px solid #030a5eb7" ,fontSize:"20px", fontWeight:"600" ,color:"#030a5eb7"}} value={query}   onChange={(e)=>handlesearch(e)} placeholder='Search Employee' />
               </div>          
                  </div>                
            </div>

          </div>
                        
                {
                  userData.map( (getUser, index)=>(
                    <div className="col-10 col-md-4 mt-4"  key={getUser.employeesID}>
                    <div className=''>
                        {/* card p-2 */}
                    <div className="card" style={{borderRadius:"10px" }}>
                        <div className='d-flex align-items-center'>
                        <div className='image'><img src={getUser.imageSrc  } alt=""   width="100"  style={{padding:"15px", marginLeft:"15px", borderRadius:"20%" }}/> </div>
                        <div className='ml-3 w-90' style={{marginLeft:"", fontSize:"15px"}}>
                            <h4 className=" textLeft" style={{color:"#0018A8",fontSize:"18px" , textTransform:"capitalize" }}>{getUser.employeeName}</h4>
                            <div className='textLeft' style={{fontSize:"12px", color:"#030589b7"}}>< BsFillEnvelopeFill/>{getUser.imagName}</div> 
                          <i BsFillEnvelopeFill/>
                            {/* <BsFillEnvelopeFill>{getUser.login}</> */}
                            <div className='content' style={{fontSize:"15px"}}>                                        
                                    <h5 className=''>Designation: {getUser.designation}</h5>   
                                    <h5 className=''>Department:  {getUser.department}</h5>   
                                    <h5 className=''>Branch: {getUser.type}</h5>   
                            </div>
                        </div>
                    </div>

                       <button className="viewMore"  >View More</button>
                    </div>
                    
                </div>
                </div>
                   )) }

                   </div>  
                   </div>
      </Container>

        </React.Fragment>
        </>
    );
}

export default People