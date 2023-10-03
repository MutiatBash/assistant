import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { Assistant } from "./components/Assistant";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <div className="container">
        <div>
          <input placeholder="Enter a text" />
        </div>
        <div className="btns">
          <Button
            btntext="Edit"
            backgroundColor="blueviolet"
            info="This button allows you to edit a text"
          />
          <Button
            btntext="Submit"
            backgroundColor="green"
            info="This button allows you to sumit your text"
          />
          <Button
            btntext="Clear"
            backgroundColor="red"
            info="This button allows you to clear the text field"
          />
        </div>
      </div>
      {/* <Assistant /> */}
    </>
  );
}

export default App;
