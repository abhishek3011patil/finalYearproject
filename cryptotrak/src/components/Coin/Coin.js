import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <img src={image} alt="crypto" />
        <p className="coin-name">{name}</p>
        <p className="coin-symbol">{symbol}</p>

        <p className="coin-price">${price}</p>
        <p className="coin-volume">${volume.toLocaleString()}</p>

        {priceChange < 0 ? (
          <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
        )}

        <p className="coin-marketcap">${marketcap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Coin;
