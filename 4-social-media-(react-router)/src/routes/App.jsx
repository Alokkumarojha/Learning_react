import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";
import Sidebar from "../Components/Sidebar.jsx";
import CreatePost from "../Components/CreatePost";
import PostList from "../Components/PostList";
import { useState } from "react";
import PostListProvider from "../Store/post-list-store";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post");
  return (
    <PostListProvider>
      <div className="app-container ">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
