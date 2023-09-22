import React from "react";
import Header from "./header/Header";
import Carousel from "./header/Carousel";
import EventPost from "./event/EventPost";
import EventDetails from "./eventDetails/EventDetails";
import Brand from "./brandCarousel/Brand";
import Footer from "./footer/Footer";
import Topdonner from "./topdonner/Topdonner";

function App() {
  return (
    <div>
      <Carousel />
      <Header />
      <EventPost/>
      <EventDetails/>
      {/* <Brand/> */}
      <Topdonner/>
      <Footer/>
    </div>
  );
}

export default App;
