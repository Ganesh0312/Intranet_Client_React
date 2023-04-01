import React from "react";
import "./DateStyle.css";
import moment from 'moment';
import Grid from "@mui/material/Grid";
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
function Date() {
  return (
    <div>
         <div className="Date">
               <Grid container>
               <Grid item className="grid-item2"><TodayRoundedIcon sx={{ fontSize: 50 }}/></Grid>
               </Grid>
               <h3 className="h3">{moment().format('dddd')}</h3>
               <p className="p2">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
         </div>
    </div>
  )
}

export default Date