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
      <div class="row">
        <div class="col">
          <Logo />
          <Banner />
          <Header />
        </div>
      </div>
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
