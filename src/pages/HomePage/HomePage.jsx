// import { useState, useRef, useEffect } from "react";
import {
  Top,
  PageAnimation,
  Rates,
  Faq,
  Advantages,
  Partners,
  Areas,
  Info,
} from "../../components";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <PageAnimation>
      <Top />
      <Info />
      <Areas />
      <Advantages />
      <Rates />
      <Faq />

      <Partners />
    </PageAnimation>
  );
};

export default HomePage;
