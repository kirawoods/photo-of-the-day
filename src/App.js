import React from "react";
import "./App.css";
import { Photo } from "./components/Photo";

function App() {
  return (
    <div>
      <h1 className="title">Astronomy Photo of the Day</h1>
      <div className="container">
        <Photo />
      </div>
    </div>
  );
}

export default App;
