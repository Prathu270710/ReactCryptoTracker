import React from 'react'
import "./Coin.css"

const Coin = ({ name, image, symbol, price, volume, priceChange, marketCap, marketCapRank}) => {
    return (
        <>
        <tr className="coinRow">
        <td data-label="Coin"><img src={image} alt="cryptoCoin" className="coinImage"></img></td>
        <td data-label="Name">{name || "N/A"}</td>
        <td data-label="Symbol">{symbol ? symbol.toUpperCase() : "N/A"}</td>
        <td data-label="Price">{price ? price.toLocaleString() : "N/A"}</td>
        <td data-label="Market Cap Rank">{marketCapRank || "N/A"}</td>
        {
            (priceChange && priceChange < 0) ? 
            (<td data-label="Price Change Percentage" className="loss">{priceChange.toFixed(2)}%</td>) : 
            (<td data-label="Price Change Percentage" className="gain">{priceChange ? `+${priceChange.toFixed(2)}` : "N/A"}%</td>)
        }
        <td data-label="Market Cap">{marketCap ? marketCap.toLocaleString() : "N/A"}</td>
        <td data-label="Volume">{volume ? volume.toLocaleString() : "N/A"}</td>
        </tr>
        </>
    )
}

export default Coin;