// import logo from "./logo.svg";
import React, { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CardParent } from "./component/CardParent";
import { Thanks } from "./component/Thanks";
import { Form } from "./component/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardParent />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  );
}

export default App;
