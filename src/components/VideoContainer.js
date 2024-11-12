import React, { useEffect, useState } from "react";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import { get_videos } from "../utils/usegetVideos";

const VideoContainer = ({ YOUTUBE_API_URL }) => {
  const [popularVideos, setpopularVideos] = useState([]);
  const [error, seterror] = useState(null);
  const fetchVideos = async () => {
    const { data, errors } = await get_videos(YOUTUBE_API_URL);
    setpopularVideos(data);
    if (errors !== null) {
      seterror(errors);
    }
  };
  useEffect(() => {
    fetchVideos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return (
      <div className="text-red-600 font-bold text-center ">{`Error found- ${error}`}</div>
    );
  }

  if (popularVideos.length === 0) {
    return <div>Loading...</div>;
  }
  // console.log(popularVideos);

  return (
    <div className="flex flex-wrap gap-2 md:gap-4 ml-11">
      {popularVideos.map((item) => {
        return (
          <Link key={item.id} to={"/watch?v=" + item.id}>
            <VideoCards props={item} />{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
