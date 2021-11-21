import React from "react";
import Header from "./components/Header";
import KegControl from "./components/KegControl";
// import SidePanel from "./components/arch/SidePanel";
import Banner from "./components/Banner";
import Logo from "./components/Logo";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App(){
  return (
    <div
    style={{
      // fontFamily: '-apple-system',
      // fontSize: "1rem",
      // fontWeight: 1.5,
      // lineHeight: 1.5,
      // color: "#292b2c",
      // backgroundColor: "grey",
      // padding: "0 2em"
    }}
    >
      <section className="py-4 container">
        {/* <h2>All Kegs</h2> */}
        <div className="row">
          <div className="col-3 logotop">
          <Logo />  
          </div>
          <div className="col-9 banner">
          <Banner />
          </div>
        </div>
        <div className="row">
        {/* <div className="col-sm-3">
        <SidePanel />
        </div> */}
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

