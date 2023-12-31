import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import './styles/globals.css';
import './styles/index.css';

import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Crm from "./pages/Crm";
import Kanban from "./pages/Kanban";
import PointOfSale from "./pages/PointOfSale";
import Maps from "./pages/Maps";
import Charts from "./pages/Charts";
import Buttons from "./pages/Buttons";
import Calendar from "./pages/Calendar";
import Newsletter from "./pages/Newsletter";
import AccountSettings from "./pages/AccountSettings";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const App = ({global:{darkMode}}) => {

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });


  return (
    <BrowserRouter>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Analytics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/crm" element={<Crm />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/point-of-sale" element={<PointOfSale />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      </ThemeProvider>
  </BrowserRouter>
  )
}

const mapStateToProps = (state) => ({
  global: state.global,
});

export default connect(mapStateToProps, {})(App);
