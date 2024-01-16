import React from "react";

const NetworthCalculator = () => {
  return (
    <div>
      <h2>Networth Calculator</h2>
      <form>
        <label for="cars">Asset Description</label>
        <select id="assets" name="assets">
          <option value="cash">Cash</option>
          <option value="retirement">Retirement</option>
          <option value="investment">Investment</option>
          <option value="equity">Home Equity</option>
          <option value="other">Other</option>
        </select>
        <input type="text" name="other" id="other"></input>
        Asset Amount
        <input></input>
        <button>Add</button>
        <label for="cars">Liability Description</label>
        <select id="liability" name="liability">
          <option value="loan">Loan</option>
          <option value="credit-card">Credit Card</option>
          <option value="Klarna">Klarna</option>
          <option value="Afterpay">Afterpay</option>
          <option value="Other">Other</option>
        </select>
        { document.getElementById("liability")?.value === "Other" && <input type="text" name="other" id="other"> </input>}
    
        Liability Amount
        <input></input>
        <button>Add</button>
        <button>Calculate</button>
      </form>
    </div>
  );
};

export default NetworthCalculator;
