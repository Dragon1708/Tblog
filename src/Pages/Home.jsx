import React from "react";

import { useSelector,useDispatch } from "react-redux";
import {fetchProducts} from "../redux/actions/products";

import searchIcon from "../Assets/icons/search-normal.svg";

import { FilterSection } from "../Components";

import "../Components/Header/Header.scss";
import "../Components/SearchBlock/SearchBlock.scss";

import "../scss/App.scss";

import CardSection from "../Components/CardSection/CardSection";

export default function Home() {
  const dispatch=useDispatch()
  const {products}=useSelector(({productsReducer})=>{
    return {
      products: productsReducer
    }
  })
  const {filter}=useSelector(({filterReducer})=>{
    return{
      filter: filterReducer
    }
  })

  React.useEffect(() => {
    dispatch(fetchProducts(filter))
      },[filter])

  return (
    <div>
    <section className="SearchBlock container">
      <h1 className="SearchBlock__Title paragraph-text">Explore Collectibles </h1>
      <form className="Search-bar">
        <input type="text" placeholder="Search.." />
        <button className="Search-bar__btn">
          <img src={searchIcon} alt="logo" />
        </button>
      </form>
    </section>

  <FilterSection filtres={filter}/>
<CardSection products={products}/>

  </div>
  );
}
