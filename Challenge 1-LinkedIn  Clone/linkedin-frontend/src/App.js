import React from "react";
import Header from "./Header";

import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="App">
      {/* <h1>Linkedin Clone</h1> */}
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app-body">
        <Sidebar />
        <Feed />

        {/* feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
