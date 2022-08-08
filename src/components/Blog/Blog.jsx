import React from "react";
import Footer from "../Footer/Footer";
import Projects from "../Home/Projects/Projects";
import Services from "../Home/Services/Services";
import NavMenu from "../NavMenu/NavMenu";
import BlogSlider from "./BlogSlider/BlogSlider";

const Blog = () => {
  return (
    <>
      <NavMenu />
      <BlogSlider />
      <Projects />
      <Footer />
    </>
  );
};

export default Blog;
