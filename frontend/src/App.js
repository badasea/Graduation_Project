// import axios from "axios";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
