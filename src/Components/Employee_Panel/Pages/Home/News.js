import React, {useState, useEffect}from 'react'
import "./NewsStyle.css";
import img3 from "../../Images/img3.jpg";

function News() {

const news = [
  {id:0},
  {id:1},
  {id:2},
  {id:3},
];

const[newsData, setnewsData] = useState(news[0].description)
const handleClick=(index)=>{
  console.log(index)
  const newsSlider= news[index].description;
  setnewsData(newsSlider)
}
  return (
    <div>
    <p className="text-news">Company News</p>
         <div className="News">
                <div>{newsData}</div>
                <img src={img3} className="news-img"/>
                <div className='flex_row'>
                  {news.map((data,i)=>
                  <h1 key={i} onClick={()=>handleClick(i)}>.</h1>)}
                </div>
        </div>

    </div>
  );
}

export default News