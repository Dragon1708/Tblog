import React from "react";

import {ReactComponent as CategoryIcon} from '../../../Assets/icons/Category.svg'
import "./SideBTN.scss";

export default function SideBTN(){
    return (
      <button className="SideBTN">
 <CategoryIcon className="SideBTN__icon" alt="CategoryIcon" />
      </button>
    )
}