import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import './styles/font.css';
import './styles/globals.css';
import './styles/index.css';

import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Crm from "./pages/Crm";
import Kanban from "./pages/Kanban";
import Maps from "./pages/Maps";
import Charts from "./pages/Charts";
import Buttons from "./pages/Buttons";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Analytics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/crm" element={<Crm />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App
