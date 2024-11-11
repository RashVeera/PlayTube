import React from "react";

const Button = ({ name }) => {
  return (
    <div className="py-1 px-1 bg-custom-grey opacity-80  text-white font-semibold  rounded-lg">
      {name}
    </div>
  );
};

export default Button;