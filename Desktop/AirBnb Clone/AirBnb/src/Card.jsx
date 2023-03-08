import React from "react";
import './Card.css'
const Card = (props) => {
  return (
    <div>
      <div className="container">
        { props.count ===0 &&<div className="badge">SOLD OUT</div>}
        <div className="image">
          <img className="photo"  src={`/images/${props.photo}`}></img>
        </div>
        <div className="rating">
          <img className="star" src="public\images\star.png"></img>
          <h2>{props.rating}{props.reviewCount}{props.country} </h2>
        </div>
        <div className="title">
          <p>{props.title}</p>
        </div>
        <div className="price">
          <h1>From ${props.price} <span>/person</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
