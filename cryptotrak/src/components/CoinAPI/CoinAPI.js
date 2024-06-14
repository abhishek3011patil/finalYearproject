import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CoinAPI.css";
import Coin from "../Coin/Coin";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SuggestionCards from "../SuggestionCards/SuggestionCards";

function CoinAPI() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  let a = 1;

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=2&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="CoinAPI">
      <div className="CoinContent">
        <h2>People also watch</h2>

        <div className="coinApp">
          {filteredCoins.map((coin) => {
            return (
              <SuggestionCards
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
      </div>
    </div>
  );
}

export default CoinAPI;
