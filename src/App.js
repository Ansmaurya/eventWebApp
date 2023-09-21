import React from "react";
import Header from "./header/Header";
import Carousel from "./header/Carousel";
import EventPost from "./event/EventPost";
import EventDetails from "./eventDetails/EventDetails";
import Brand from "./brandCarousel/Brand";

function App() {
  return (
    <div>
      <Carousel />
      <Header />
      <EventPost/>
      <EventDetails/>
      <Brand/>
    </div>
  );
}

export default App;
