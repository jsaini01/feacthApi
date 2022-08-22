import React from "react";
import { Routes, Route } from "react-router-dom";
import Data from "./Data";
import Users from "./Users";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Users />} path="/"></Route>
        <Route element={<Data />} path="/user"></Route>
      </Routes>
    </>
  );
};

export default App;
