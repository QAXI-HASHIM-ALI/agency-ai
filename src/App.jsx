import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TrustedBy from "./Components/TrustedBy";
import Services from "./Components/Services";
import OurWork from "./Components/OurWork";
import Teams from "./Components/Teams";
import Contact from "./Components/Contact";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <Contact />
    </div>
  );
};

export default App;
