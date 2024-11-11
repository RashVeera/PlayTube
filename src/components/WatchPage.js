import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/AppSlice";
import { GOOGLE_API_KEY } from "../utils/constants";
import ErrorPage from "./ErrorPage";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [params] = useSearchParams();
  const paramsid = params.get("v");
  const dispatch = useDispatch();
  const [video, setvideo] = useState(null);
  const [channel, setChannelVideo] = useState(null);
  const [error, setError] = useState(null);

  const fetchChannelandVideo = async () => {
    try {
      const response = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
          paramsid +
          "&key=" +
          GOOGLE_API_KEY,
      );
      if (!response.ok) {
        console.log(response);
        throw new Error(`API error: ${response.status}`);
      }
      const videoData = await response.json();
      setvideo(videoData.items[0]);
      const channels = await fetch(
        "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
          videoData.items[0].snippet.channelId +
          "&key=" +
          GOOGLE_API_KEY,
      );
      if (!channels.ok) {
        console.log(channels);
        throw new Error(`API error: ${channels.status}`);
      }

      const channelData = await channels.json();
      setChannelVideo(channelData.items[0]);
    } catch (e) {
      setError(e.message || "Something went wrong!");
    }
  };

  useEffect(() => {
    dispatch(closeMenu());
    if (paramsid) {
      fetchChannelandVideo();
    }
  }, []);

  if (error) {
    return (
      <div className="text-red-600 font-bold text-center ">{`Error found- ${error}`}</div>
    );
  }

  if (!video || !channel) return;

  return (
    <div className="ml-32 mt-28  text-white w-[900px]">
      <iframe
        className="rounded-md"
        width="900"
        height="450"
        src={"https://www.youtube.com/embed/" + paramsid}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <span className="block text-xl mt-2 font-bold ">
        {video.snippet.title}
      </span>
      <div className="flex">
        <img
          className="rounded-full w-9 mt-2"
          alt="image-icon"
          src={channel.snippet.thumbnails.default.url}
        />
        <div className="mt-2 ml-2">
          <span className="font-bold text-sm font-sans">
            {video.snippet.channelTitle}
          </span>
          <span className="block text-xs">
            {Math.trunc(channel.statistics.subscriberCount / 1000)}K subscribers
          </span>
        </div>
      </div>
      <div className="whitespace-pre-wrap bg-custom-grey px-3 py-2 mt-3  text-sm rounded-md">
        {video.snippet.description}
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
