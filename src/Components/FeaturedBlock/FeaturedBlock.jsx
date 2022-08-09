import React from "react";

import FuturedCard from "./FuturedCard/FuturedCard";
import "./FeaturedBlock.scss";

export default function FeaturedBlock(){
 
    return (
        <section className="FeaturedBlock">
<div className="FeaturedBlock__title-block">
<h1 className="FeaturedBlock__title">Article of Day</h1>
<a className="FeaturedBlock__view-more" href="">View More</a>
</div>
<FuturedCard/>
      </section>
    )
}