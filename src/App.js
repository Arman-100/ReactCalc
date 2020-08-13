import React, { useState } from "react";
import Button from "./components/Button";
import "./App.scss";
import { Input } from "./components/Input";

function App() {
  const [input, setinput] = useState("");

  return (
    <div className="App">
      <div className="calc-wrap">
        <Input input={Input}></Input>
        <div className="row">
          <Button onClick={() => setinput("")}>C</Button>
          <Button>+/-</Button>
          <Button>%</Button>
          <Button>÷</Button>
        </div>
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>X</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="row bottom">
          <Button>0</Button>
          <Button>.</Button>
          <Button className="equal"> =</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
