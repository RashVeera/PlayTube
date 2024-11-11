import React from "react";

const SearchitemCards = ({ props }) => {
  const { snippet } = props;

  return (
    <div className="text-white flex my-4 ml-4 cursor-pointer">
      <img
        className="rounded-lg w-[500px]"
        alt="vide_thumbnail"
        src={snippet.thumbnails.medium.url}
      />
      <div className="flex flex-col ml-5">
        <span className=" text-md mt-1 font-semibold font-sans overflow-y-hidden">
          {snippet.title}
        </span>
        <span className=" text-xs block pt-2 text-gray-400">
          {snippet?.channelTitle}
        </span>
        <span className=" text-xs block pt-2 text-gray-400">
          {snippet?.description}
        </span>
      </div>
    </div>
  );
};

export default SearchitemCards;
