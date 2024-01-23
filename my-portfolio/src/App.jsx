import { useState } from "react";
import "./App.css";
import Aside from "./Components/Aside";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="flex  bg-black  w-full h-full">
        <Aside />
      </div>
    </>
  );
}

export default App;
