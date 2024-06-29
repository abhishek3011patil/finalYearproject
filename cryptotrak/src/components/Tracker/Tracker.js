import React, { useState, useEffect } from "react";
import axios from "axios";
import "./tracker.css";
import Coin from "../Coin/Coin";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Tracker() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    const searchInput = document.getElementById("cryptoSearchInputQuery");
    e.preventDefault();
    setSearch(searchInput.value);
    console.log(search);
    //setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header></Header>

      <div className="coin-container ">
        <form role="search" className="tracker-form" onSubmit={handleChange}>
          <input
            type="search"
            className="coin-input"
            id="cryptoSearchInputQuery"
            placeholder="Search a coin here"
          />
          <button type="submit" className="formButton">
            {" "}
            submit
          </button>
        </form>

        <div className="coin-row coin-header">
          <div className="imagediv"> </div>
          <p className="coin-name">Name</p>
          <div className="coin-symbol">Symbol</div>

          <p className="coin-price">Price</p>
          <p className="coin-volume">Coin volume</p>

          <p className="coin-percent ">Price Change</p>

          <p className="coin-marketcap">Market Cap</p>
        </div>
      </div>

      <div className="coin-app">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Tracker;
