import { useState } from "react";
import data from "./data.json";

import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <div className="left">
          <h1>Notifications</h1>
          <span>3</span>
        </div>
        <div className="right">
          <h2>Mark all as read</h2>
        </div>
      </div>

      <div className="notifications">{data.map((notifications) => {})}</div>
    </>
  );
}

export default App;
