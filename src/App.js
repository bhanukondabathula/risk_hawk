import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import Contents from "./components/Contents/Contents";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        <Tabs />
        <Contents />
      </div>
    </div>
  );
}

export default App;

