import React from "react";

import Card from "../Cards/CardTypeA/CardTypeA";
import LoadingCard from "../Cards/LoadingCard";

import "./CardSection.scss";


export default function CardSection({products}){
const isLoaded=products.isLoaded
    return (
      <section className="Card__section container">
   {  
   isLoaded ? products.items.map((item, i) => (
    < Card key={item.id} itemData={item} />
   )) : Array(5).fill(0).map((_,i)=>  <LoadingCard key={i}/>)
   }

      </section>
    )
}