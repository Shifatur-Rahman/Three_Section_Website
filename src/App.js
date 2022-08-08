// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavMenu from "./components/NavMenu/NavMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
