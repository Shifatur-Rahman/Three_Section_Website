import React from "react";
import Footer from "../Footer/Footer";
import Projects from "../Home/Projects/Projects";
import NavMenu from "../NavMenu/NavMenu";
import Intro from "./Intro/Intro";
import Slider from "./Slider/Slider";

const About = () => {
  return (
    <>
      <NavMenu />
      <Slider />
      <Intro />
      <Footer />
    </>
  );
};

export default About;
