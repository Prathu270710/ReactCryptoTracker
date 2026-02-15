import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import CoinSearch from "./components/CoinSearch/CoinSearch.js";
import Footer from "./components/Footer/Footer.js"
import "./App.css"

// the main function body
function App() {

  return (
   <>
    <Navbar />
    <CoinSearch />
    <Footer />
   </>
  );
}

export default App;