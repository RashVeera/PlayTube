import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import search_icon from "../assets/download.png";
import { autosuggest } from "../utils/constants";
import {  cacheResults, removecacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setsearchText] = useState("");
  const [searchapiText, setsearchapiText] = useState([]);
  const [showserchResults, setshowserchResults] = useState(false);
  const [LRU, setLRU] = useState([]);
  const [pops, setpop] = useState(null);

  const cache = useSelector((store) => store.search.searchState);
  // console.log(cache)
  const handleclick = () => {
    dispatch(toggleMenu());
  };

  const handleItemClick =(item) =>{
    // console.log('tiem')
    window.location.href="/search?q="+item
  }
  const autosuggestionsapi = async () => {
    const autosuggestions = autosuggest + searchText;
    // console.log('API Call - '+searchText)
    const api = await fetch(autosuggestions);
    const json_data = await api.json();
    setsearchapiText(json_data[1]);

    if (LRU.length >= 6) {
      setLRU((prevItems) => {
        const poppedElement = prevItems[0];
        setpop(poppedElement);
        const updatedElement = prevItems.slice(1);
        return updatedElement;
      });
    }
    setLRU((items) => {
      const newitems = items;
      newitems.push(searchText);
      return newitems;
    });
    dispatch(
      cacheResults({
        [searchText]: json_data[1],
      }),
    );
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      window.location.href = `/search?q=${searchText}`;  
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchText]) {
        setsearchapiText(cache[searchText]);
      } else {
        autosuggestionsapi();
      }
    }, 200);
    if (pops !== null) {
      const updatedCache = { ...cache };
      delete updatedCache[pops];
      dispatch(removecacheResults(updatedCache));
      setpop(null);
    }
    return () => {
      clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, pops]);
  return (
    <div className="fixed w-screen z-10">
      <div className="grid grid-cols-12 bg-black shadow-lg py-2 px-4 ">
        <div className="md:col-span-2 col-span-3 flex">
          <img
            onClick={() => handleclick()}
            className="md:h-7 h-6  md:mt-4 mt-5 cursor-pointer rounded-full"
            alt="hamburger"
            src="data:image/png;base64,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"
          />
          <a href="/">
            <img
              className="h-16"
              alt="logo"
              src="data:image/png;base64,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"
            />
          </a>
        </div>
        <div className="md:col-span-9 col-span-7 md:-ml-0 -ml-28">
          <div className="flex ">
            <input
              value={searchText}
              onChange={(e) => {setsearchText(e.target.value)}}
              onKeyPress={handleKeyPress}     
              onFocus={() => setshowserchResults(true)} // Show results on focus
              onBlur={() => setTimeout(() => setshowserchResults(false), 200)} // Hide results on blur (with delay to avoid click misfire)
  
              className="h-10 mt-3 w-1/2 ml-28 rounded-l-full border border-gray-500 text-gray-500 px-5 py-2 bg-black"
              placeholder="Search"
              type="text"
            />

            <a href={"/search?q="+searchText}>
              <button className="mt-3">
                <img
                  alt="search"
                  className="md:h-[2.6rem] h-[2.5rem] border  border-gray-500 rounded-r-full bg-gray-900"
                  src={search_icon}
                />
              </button>
            </a>
          </div>
          {showserchResults && searchapiText.length > 0 && (
            <div onFocus={() => {
            }} className="flex flex-col gap-1 rounded-lg fixed bg-custom-grey w-[16rem] md:w-[18rem] lg:w-[25rem] xl:w-[33rem] z-10 ml-28 md:ml-32 px-7 py-2 mt-2">
            <ul >
              {searchapiText.map((item) => (
                <li  onClick={()=>handleItemClick(item)}  key={item} className="text-white  hover:bg-slate-700 hover:cursor-pointer">
                  {' '+item}
                </li>
              ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex md:col-span-1 col-span-2 md:mt-0 mt-1 ">
          <img
            className="h-8 mt-3 rounded-full"
            alt="user-icon"
            src="data:image/png;base64,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"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
