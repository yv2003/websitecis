import React from "react";
import { Navbar } from "../navbar/Navbar";
import PrevEvents from "../prev-events";
// import EventsPage from "../events-page";
import Footer from "../footer/Footer";

export const PreviousEvents = () => {
  return (
    <>
      <Navbar />
      {/* <EventsPage /> */}
      <PrevEvents />
      <Footer/>
  </>
  )
};