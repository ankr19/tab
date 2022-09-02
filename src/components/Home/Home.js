import React from "react";
import Sidebar from "../Body/Sidebar/Sidebar";
import Feed from "../Body/Feed/Feed";
import Widgets from "../Body/Widget/Widgets";
const Home = () => {
  return (
    <div>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default Home;
