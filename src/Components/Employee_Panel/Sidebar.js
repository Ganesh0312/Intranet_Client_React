import React, {Component} from "react";
import "./SidebarStyle.css";
import { SidebarData } from './SidebarData';

export class Sidebar extends Component{

render(){
  return (

    <div className="Sidebar">
    <ul className="SidebarList">

        {SidebarData.map((val, key)=>{
            return(
                <li 
                key={key} 
                className="row" 
                onClick={()=> {window.location.pathname = val.link}}>
                    {" "}
                    <div id="icon">{val.icon}</div>{" "}
                </li>
            );
        })}
    </ul>
    </div>

  );
  }
}

export default Sidebar