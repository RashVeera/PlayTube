import React from "react";
import Filterbutton from "./Filterbutton";
import VideoContainer from "./VideoContainer";
import { YOUTUBE_API_URL } from "../utils/constants";

const MainContainer = () => {
  return (
    <div className="bg-black w-screen">
      <Filterbutton />
      <VideoContainer YOUTUBE_API_URL={YOUTUBE_API_URL} />
    </div>
  );
};

export default MainContainer;
