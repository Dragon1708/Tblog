import React from "react";
import { useSelector, useDispatch } from "react-redux";

import image1 from "../Assets/images/Image1.png";
import Creator from "../Components/CreatorBlock/Creator";
import { addProductToCart } from "../redux/actions/Cart";

import "./Product.scss";

export default function Product() {
  const dispatch=useDispatch()
  const {itemData}=useSelector(({productsReducer})=>{
    return{
      itemData: productsReducer.item
    }
  })

const handleAddProductToCart =()=>{
  dispatch(addProductToCart(itemData))
}

  return (
    <section className="main container">
      <div className="product">
        <img className="product__img" src={image1} alt="image1" />
        <div className="product__description-wrapper">
          <h1 className="product__title paragraph-text">{itemData.title}</h1>
          <p className="product__mini-description description-text">
            The Birdhouse is a collection of 6000 birds, each with it's own
            unique traits & personality. See them all at TheBirdHouse.app
          </p>
          <div className="price">
            <label className="price__label label-text">Price</label>
            <h2 className="price__count">43 ETH</h2>
          </div>
          <div  className="product__creator-wrapper">
          <Creator creatorID={itemData.creatorID}/>
          </div>
          <button onClick={handleAddProductToCart} className="product__buy-btn">
            Place A Bid
          </button>
        </div>
      </div>

      <section className="data">
        <div className="data__toogle">
          <button className="data__description-btn outline-btn-active">Description</button>
          <button className="data__offers-btn">offers</button>
          <button className="data__history-btn">history</button>
        </div>
        <div className="data__details">
          <p className="data__description description-text">
            it mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <table className="table">
            <tr>
              <th className="table__left">Address</th>
              <th  className="table__right description-text" >Product ID</th>
        
            </tr>
            <tr>
              <td  className="table__left">Alfreds Futterkiste</td>
              <td className="table__right description-text">Maria Anders</td>
            </tr>

          </table>
        </div>
      </section>
      <section className="another">
        <div className="another__toggle">
          <h1 className="another__title">Another</h1>
          <a href="http://" className="another__viewAll-btn">
            View All
          </a>
        </div>
        <div className="another__product">

        </div>
      </section>
    </section>
  );
}
