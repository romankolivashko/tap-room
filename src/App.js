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
      <div className="row" style={{height: "100px"}}>
        <div className="col-xs-3">
            <Logo />
        </div>
        <div className="col-xs-9">
            <Banner />
        </div>
      </div>
      <Header />
      <section className="py-4 container">
        <div className="row">
          <div className="col">
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
