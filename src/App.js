import React from "react";
import Header from "./components/Header";
//import ItemControl from "./components/ItemControl";
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <Header />
        <div className="row justify-content-center">
        <KegControl />
        </div>
      </section>
    </div>
  );
}

export default App;

