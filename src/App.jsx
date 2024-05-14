import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAll from "./components/ViewAll";

function App() {
  return (
    <>
      <Navbar />
      <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs" />
      <HomeCards />
      <JobListings />
      <ViewAll />

      <script src="js/main.js"></script>
    </>
  );
}

export default App;
