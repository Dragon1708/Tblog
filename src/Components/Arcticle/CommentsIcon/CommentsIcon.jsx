import React from "react";

import Writer from "../Writer/Writer";
import "./ArticleCard.scss";


export default function ArticleCard(){

    return (
      <div className="ArticleCard">
       <img className="ArticleCard__img" src={"https://st.hzcdn.com/simgs/pictures/haeuser/privat-hause-uwe-muehlhaeusser-photography-img~8651584504ec96c2_4-3581-1-e88d95e.jpg"} alt="image1" />
   <h1 className="ArticleCard">
   Topic best of DayTopic best of DayTopic best of Day
   </h1>
   <p className="ArticleCard__sub-title">
   Topic best of DayTopic best of DayTopic best of DayTopic best of DayTopic best of DayTopic best of Day
   Topic best of DayTopic best of DayTopic best of Day
   </p>
   <div className="Article__data">
    <Writer/>
    
   </div>
      </div>
    )
}