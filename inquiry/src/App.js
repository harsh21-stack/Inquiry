import React from "react";
import "./App.css";
import Reports from "./reports";
import Page1 from "./Page1";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Form from "./form";
import Follow from "./follow";
import Inquiry from "./inquiry";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route exact path="/Page1" element={<Page1 />} />
      <Route exact path="/Reports" element={<Reports />} />
      <Route exact path="/Form" element={<Form />} />
      <Route exact path="/Follow" element={<Follow />} />
      <Route exact path="/Inquiry" element={<Inquiry />} />
    </Routes>
  );
}

export default App;
