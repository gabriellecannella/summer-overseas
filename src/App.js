import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import Testimonials from "./components/pages/Testimonials";
import AboutUs from "./components/pages/AboutUs";
import PastTrips from "./components/pages/PastTrips";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route>
          <Route
            path="/testimonials"
            exact
            element={<Testimonials></Testimonials>}
          ></Route>
          <Route path="/about-us" exact element={<AboutUs></AboutUs>}></Route>
          <Route
            path="/past-trips"
            exact
            element={<PastTrips></PastTrips>}
          ></Route>
          <Route path="/sign-up" exact element={<SignUp></SignUp>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
