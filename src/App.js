import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import ImageLoader from "./components/ImageLoader";
import ListComponent from "./components/ListComponent";
import ScaleComponent from "./components/ScaleComponent";
import ArcWrapper from "./components/ArcWrapper";
import CardWrapper from "./components/CardWrapper";

const listdata = ["1","2","3"];

const listobject = listdata.map((item,idx) => ({
  id: idx,
  val: item
}));

function App() {
  const [state,setState] = useState("default")
  return (
  <div>
      <div>
        <h1>current state: {state}</h1>
        <button onClick = {()=> setState("special")}>special</button>
      </div>
  <ArcWrapper/>
  <CardWrapper/>
  </div>)
}

export default App;