import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
import axios from "axios";
import {ClipLoader} from "react-spinners"
const App = () => {
  const baseURL = "https://api.github.com/users/";

  const [user, setuser] = useState([]);
  const [input, setinput] = useState(null);
  const [loading, setloading] = useState(false);

  const handleSubmit = (e) => {
    setloading(true);
    e.preventDefault();
    axios.get(baseURL + input).then((response) => {
      setuser(response.data);
    }).catch((err)=>{
      console.log(err)
    }).finally(()=>{
      setloading(false);
    })
  };

  console.log(loading);
  return (
    <div className="app">
      <div className="card-container">
        <div className="input-container">
          <input type="text" placeholder="Enter Name to search on Github" onChange={(e) => setinput(e.target.value)} />
          <button type="submit" onClick={handleSubmit} style={{cursor:"pointer"}}>
            Submit
          </button>
        </div>
        {loading ? (
          <div className="loader">
            <ClipLoader color="#000" />
          </div>
        ) : (
          <div>
            <Card user={user} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
