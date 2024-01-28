import React, { useState } from "react";
import Asset from "../Asset/Asset";
import Liability from "../Liability/Liability";

const NetworthCalculator = () => {
    //Asset State
    const [assets, setAssets] = useState([]);
    const [liabilities, setLiabilities] = useState([]);
    const [ networthTotal, setNetworthTotal ] = useState(0)

    const handleAddAsset = (newAsset) => {
      setAssets(...assets, newAsset)
    }
    const handleAddLiabilities = (newLiabilites) => {
      setLiabilities(...liabilities, newLiabilites)
    }
    const handleCalculate = () => {
      const assetTotal = assets.reduce((total,asset)=> total + asset.amount, 0)
      const liabilityTotal = liabilities.reduce((total,liability)=> total + liability.amount, 0)
      const netWorthCalculate = assetTotal +liabilityTotal

      setNetworthTotal(netWorthCalculate)
  
  }
  return (
    <div>
      <h2>Networth Calculator</h2>
      <form>
        <Asset onAddAsset={handleAddAsset}/>
        <Liability onAddLiability={handleAddLiabilities}/>
        <p>Networth Total:${networthTotal.toFixed(2)} </p>
        <button onClick={handleCalculate}>Calculate</button>
      </form>
    </div>
  );
};

export default NetworthCalculator;
