import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY, keyword_search } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import { get_videos } from "../utils/usegetVideos";
import SearchitemCards from "./SearchitemCards";

const ResultSearches = () => {
  const [params]=useSearchParams()
  const paramsid = params.get("q");
  const result_page = keyword_search+paramsid+"&key="+GOOGLE_API_KEY


  const [popularVideos, setpopularVideos] = useState([]);
  const [error, seterror] = useState(null);
  const fetchVideos = async () => {
    const { data, errors } = await get_videos(result_page);
    setpopularVideos(data);
    if (errors !== null) {
      seterror(errors);
    }
  };
  useEffect(() => {
    fetchVideos();
  }, []);

  if (error) {
    return (
      <div className="text-red-600 font-bold text-center ">{`Error found- ${error}`}</div>
    );
  }

  if (popularVideos.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(popularVideos);

  return (
    <div className="flex flex-col gap-4 ml-28 mt-28">
      {popularVideos.map((item) => {
        return (
          <Link key={item.id} to={"/watch?v=" + item.id}>
            <SearchitemCards props={item} />{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default ResultSearches;
