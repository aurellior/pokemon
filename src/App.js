import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import React from "react";
import Home from "./routes/Home";
import Mainpoke from "./routes/Mainpoke";
import Pokeinfo from "./routes/Pokeinfo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <header className="bg-transparent">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mainpoke" element={<Mainpoke />} />
        <Route path="mainpoke/pokeinfo/:id" element={<Pokeinfo />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
