import React from "react";
import "./staticstyle.css";
import grp from "./assets/group.png";

export default function Static() {
  return (
    <div className="group">
      <img src={grp} alt="" />
      <div className="heading">Online Experiences</div>
      <div className="content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</div>
    </div>
  );
}
