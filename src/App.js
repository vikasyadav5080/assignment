import Axios from "axios";
import "./App.css";
import React, { useState, useEffect } from "react";
import GamerCard from "./GamerCard";


function App() {
  var url = `https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json`;
  async function getData() {
    var result = await Axios.get(url);
    setGames(result.data);
  }
   useEffect(() => {
    getData();
  }, []);

  const [search, setSearch] = useState("");
  const [games, setGames] = useState([]);

   

 


  return (

    <div className="App">
      <div className="mai">
        <header className="header">Games Store</header>
        <form className="main">
          <div className="main-search">
            <input
              type="text"
              placeholder="Search by Name or Platform"
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="dropdown">
              <button className="dropbtn">Sort by Score</button>
              <div className="dropdown-content">
                <a href="#">Asc</a>
                <a  href="#">Desc</a>
              </div>
            </div>
          </div>
        </form>
        <div className="main-content">
          {games
            .slice(1)
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              } else if (
                val.platform.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((gamer, index) => {
              return (
                <div className="card" key={index}>
                  {GamerCard(gamer)}
                </div>
              );
            })}

        </div>
      </div>
    </div>
  );
}

export default App;
