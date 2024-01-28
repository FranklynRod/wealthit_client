import React from "react";
import Asset from "../Asset/Asset";
import Liability from "../Liability/Liability";
//State
//props from asset and liability will be caluculated in networth
//Displayed 

const NetworthCalculator = () => {

  return (
    <div>
      <h2>Networth Calculator</h2>
      <form>
        <Asset/>
        <Liability/>
        <p>Networth Total:</p>
        <button>Calculate</button>
      </form>
    </div>
  );
};

export default NetworthCalculator;
