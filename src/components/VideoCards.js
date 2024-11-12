import React from "react";

const VideoCards = ({ props }) => {
  const { snippet, statistics } = props;
  const viewMCount = Math.trunc(statistics.viewCount / 100000);

  return (
    <div className="text-white md:w-80 w-60 md:my-4 my-2 ml-4 hover:scale-[0.9] cursor-pointer">
      <img
        className="rounded-md"
        alt="vide_thumbnail"
        src={snippet.thumbnails.medium.url}
      />
      <span className="block text-sm md:text-md mt-1 font-bold h-11 overflow-y-hidden">
        {snippet.title}
      </span>
      <span className=" text-xs md:text-sm block pt-2 text-gray-400">
        {snippet?.channelTitle}
      </span>
      {viewMCount !== 0 && (
        <span className="text-xs text-gray-400">{viewMCount}M views</span>
      )}
      {!viewMCount && (
        <span className="text-xs text-gray-400">
          {Math.trunc(statistics.viewCount / 1000)}K views
        </span>
      )}
    </div>
  );
};

export default VideoCards;
