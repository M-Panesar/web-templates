import React, {component} from "react";
import Header from "./components/main-page/Header.js";
import Membership from "./components/main-page/Membership.js";
import Footer from "./components/main-page/Footer.js";
import Service from "./components/main-page/Service.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Service/>
      <Membership/>
      <Footer/>
    </div>
  );
}

export default App;