import React from "react";
//Components
import Navbar from "../components/Home/navbar";
//Term
import Term from "../terms/Term";

const TermScreen = ({ language, setLanguage }) => {
  return (
    <div className="App">
      <Navbar term={true} />
      <div className="term_container">
        <h1>Gizlilik Sözleşmesi</h1>
        <p>{Term}</p>
      </div>
    </div>
  );
};

export default TermScreen;
