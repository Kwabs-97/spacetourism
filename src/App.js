/** @format */

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Destination from "./Components/Destination";
import Crew from "./Components/Crew/Crew";
import Technology from "./Components/Technology/Technology";

function App() {
  return (
    <div className="App w-screen h-screen">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
