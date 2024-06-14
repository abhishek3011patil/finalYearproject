import React from "react";
import "./SuggestionCards.css";
const SuggestionCards = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="SuggestionCards">
      <div className="imageContainer">
        <img src={image} alt="crypto" />
      </div>
      <div className="infoContainer">
        <p className="nameCoin"> {name} </p>
        <p className="priceCoin">{price}</p>
        {priceChange < 0 ? (
          <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
        )}
      </div>
    </div>
  );
};

export default SuggestionCards;
