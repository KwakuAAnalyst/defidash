import React, { useState, useEffect } from "react";
import "./App.css";
import { Web3 } from "web3";
import { ChainlinkPlugin, MainnetPriceFeeds } from "@chainsafe/web3-plugin-chainlink";

function App() {
  const [tokenPrices, setTokenPrices] = useState({
    BTC: null,
    ETH: null,
    LINK: null,
    UNI: null,
    AAVE: null,
  });

  const [protocolTVL, setProtocolTVL] = useState({
    Uniswap: null,
    Aave: null,
    Compound: null,
  });

  const [isLoading, setIsLoading] = useState(true);

  // Initialize RPC/injected provider
  const web3 = new Web3(window.ethereum);
  // Register the plugin
  web3.registerPlugin(new ChainlinkPlugin());

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsLoading(true);
    await Promise.all([getTokenPrices(), getProtocolTVL()]);
    setIsLoading(false);
  }

  async function getTokenPrices() {
    const priceFeeds = {
      BTC: MainnetPriceFeeds.BtcUsd,
      ETH: MainnetPriceFeeds.EthUsd,
      LINK: MainnetPriceFeeds.LinkUsd,
      UNI: MainnetPriceFeeds.UniUsd,
      AAVE: MainnetPriceFeeds.AaveUsd,
    };

    const newPrices = {};

    for (const [token, feed] of Object.entries(priceFeeds)) {
      try {
        const price = await web3.chainlink.getPrice(feed);
        newPrices[token] = parseFloat(price.answer.toString()) / 1e8;
      } catch (error) {
        console.error(`Error fetching ${token} price:`, error);
        newPrices[token] = null;
      }
    }

    setTokenPrices(newPrices);
  }

  async function getProtocolTVL() {
    // In a real application, you would fetch this data from appropriate Chainlink data feeds or other APIs
    // This is a placeholder implementation
    const newTVL = {
      Uniswap: (Math.random() * 5 + 5).toFixed(2),
      Aave: (Math.random() * 3 + 2).toFixed(2),
      Compound: (Math.random() * 2 + 1).toFixed(2),
    };

    setProtocolTVL(newTVL);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>DeFi Dashboard</h1>
        <button className="refresh-button" onClick={fetchData} disabled={isLoading}>
          {isLoading ? "Refreshing..." : "Refresh Data"}
        </button>
        <div className="dashboard">
          <section className="dashboard-section">
            <h2>Token Prices</h2>
            {Object.entries(tokenPrices).map(([token, price]) => (
              <p key={token}>
                {token} price: {price ? `$${price.toFixed(2)}` : "Loading..."}
              </p>
            ))}
          </section>
          <section className="dashboard-section">
            <h2>Protocol TVL</h2>
            {Object.entries(protocolTVL).map(([protocol, tvl]) => (
              <p key={protocol}>
                {protocol} TVL: {tvl ? `$${tvl}B` : "Loading..."}
              </p>
            ))}
          </section>
        </div>
      </header>
    </div>
  );
}

export default App;