import React from "react";
// import kathie from "./assets/kathie.png";
import star from "./assets/star.png";
import "./cardstyle.css";

export default function Card(props) {
  console.log(props.item);
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location == "Online") {
    badgeText = "ONLINE";
  } else if (props.item.openSpots <= 5) {
    badgeText = "FEW LEFT!";
  }

  return (
    <>
      <div className="card">
        <img
          src={props.item.coverImg}
          alt=""
          width="200px"
          className="titleimg"
        />
        {badgeText && <div className="badge">{badgeText}</div>}
        <p>
          <img src={star} alt="" />
          <span>{props.item.stats.rating}</span>
          <span className="grey">({props.item.stats.reviewCount}) • </span>
          <span className="grey">{props.item.location}</span>
        </p>
        <p>{props.item.title}</p>
        <p>
          <strong> From ${props.item.price} /</strong> person
        </p>
      </div>
    </>
  );
}
