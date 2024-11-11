export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API;

export const autosuggest =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const keyword_search =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
