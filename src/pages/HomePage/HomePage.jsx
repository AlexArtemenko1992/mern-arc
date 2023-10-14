// import { useState, useRef, useEffect } from "react";
import {
  Top,
  PageAnimation,
  Achievements,
  Rates,
  Faq,
  Advantages,
  Partners,
} from "../../components";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <PageAnimation>
      <Top />
      <Achievements />
      <Rates />
      <Faq />
      <Advantages />
      <Partners />
    </PageAnimation>
  );
};

export default HomePage;
