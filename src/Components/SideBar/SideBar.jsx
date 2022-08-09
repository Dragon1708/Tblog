import React from "react";

import SideBTN from './SideBTN/SideBTN';

import logo from '../../Assets/icons/Logo.svg';
import "./SideBar.scss";


export default function SideBar(){


    return (
        <div className="sideBar">

      <a href="#" className="sideBar__Logo" >
      <img  src={logo} alt="image1" />
         </a>
        <ul className="sideBar__main-toggle">
        <li><SideBTN/> </li>
        <li> <SideBTN/> </li>
        <li> <SideBTN/> </li>
        <li> <SideBTN/> </li>
        </ul>
        <ul className="sideBar__setting-toggle">
        <li> <SideBTN/> </li>
        <li> <SideBTN/> </li>
        </ul>
          </div>
    )
}