import React from "react";
import Button from "./Button";

const Filterbutton = () => {
  const list = [
    "Podcasts",
    "Hearing",
    "Music",
    "Dramedy",
    "Mixes",
    "Binaural Beats",
    "Live",
    "Weight",
  ];
  return (
    <div className="flex gap-3 pt-3 pl-3 ml-11 mt-24">
      {list.map((button) => {
        return <Button key={button} name={button} />;
      })}
    </div>
  );
};

export default Filterbutton;
