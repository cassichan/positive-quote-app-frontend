import React from "react";
import {
  // BrowserRouter as Router,

  // Switch,
  Link,
  Route,
  Routes,
  // NavLink,
} from "react-router-dom";

import Home from "./Pages/Home";
import TopNav from "./Components/TopNav";
// import BottomNav from "./Components/BottomNav";
// import Hero from "./Components/Hero";
// import AddQuote from "./Components/AddQuote";
import Footer from "../src/Components/Footer.jsx";
import QuoteList from "./Components/QuoteList";
import CatForm from "./Components/CatForm";
import Gallery from "./Pages/Gallery.jsx";
import About from "./Pages/About.jsx";
import "./Styles/TopNav.css";
import "./Styles/BottomNav.css";
import "./App.css";

function App() {
  return (
    <>
      <TopNav />
      <nav id="bottom-nav">
        <Link to="/">Home</Link>&nbsp;&nbsp;
        <Link to="/quotes">Quote Collection</Link>&nbsp;&nbsp;
        <Link to="/about">About</Link>&nbsp;&nbsp;
        <Link to="/gallery">Gallery</Link>
      </nav>
      <Routes>
        <Route path="/quotes" element={<QuoteList />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route index path="/" element={<Home />}></Route>
      </Routes>
      {/* <BottomNav /> */}
      {/* <Hero /> */}
      {/* <CatForm /> */}
      {/* <AddQuote /> */}
      {/* <QuoteList /> */}
      <Footer />
    </>
  );
}

export default App;
