import React from "react";
import Nav from "./Nav";
import Static from "./Static";
import Card from "./Card";
import data from "./data";
import "./App.css";

export default function App() {
  const cardarray = data.map((card) => {
    return (
      <Card
        key={card.id}
        //Passing objects as props
        item={card}

        // img={card.coverImg}
        // rating={card.stats.rating}
        // reviewCount={card.stats.reviewCount}
        // location={card.location}
        // title={card.title}
        // price={card.price}
      />
    );
  });
  return (
    <>
      <Nav />
      <Static />
      <div className="flexbox">{cardarray}</div>
    </>
  );
}
