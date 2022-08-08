import React from "react";
import Footer from "../Footer/Footer";
import NavMenu from "../NavMenu/NavMenu";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import TopMenuBar from "./TopMenuBar/TopMenuBar";

const Home = () => {
  return (
    <>
      <NavMenu />
      <TopMenuBar />
      <Services />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
