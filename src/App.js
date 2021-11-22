import React from "react";
import Header from "./components/Header";
import KegControl from "./components/KegControl";
import Banner from "./components/Banner";
import Logo from "./components/Logo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <section className="py-4 container">
        <div className="row">
          <div className="col-3 logotop">
            <Logo />
          </div>
          <div className="col-9 banner">
            <Banner />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Header />
            <div className="row justify-content-center">
              <KegControl />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
