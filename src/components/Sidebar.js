import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const showSidebar = useSelector((store) => store.app.isMenuOpen);
  return (
    showSidebar && (
      <div className="bg-black text-white h-auto px-1 py-1 mt-20">
        <ul className="py-3 px-2  ">
          <li className="py-1">Home</li>
          <li className="py-1">Shorts</li>
          <li className="py-1">Subscription</li>
        </ul>
        <hr className="bg-gray-400 " />
        <div className="pt-3">
          <span className="font-semibold">Subscriptions</span>
          <ul className="py-3 px-2  ">
            <li>Watch Mojo.com</li>
            <li className="py-1">Power Rangers</li>
            <li className="py-1">Zig & Sharko</li>
            <li className="py-1">TedX Talks</li>
            <li className="py-1">Answer in Progress</li>
          </ul>
        </div>
        <hr className="bg-gray-400 " />
        <ul className="py-3 px-2  ">
          <li className="py-1">Settings</li>
          <li className="py-1">Report History</li>
          <li className="py-1">Help</li>
          <li className="py-1">Send Feedback</li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
