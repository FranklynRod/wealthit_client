import React, { useState } from "react";

const Asset = ({ onAddAsset, assets }) => {
  const [assetTotal, setAssetTotal] = useState(0);
  //Add user input into object
  const handleAddAsset = (event) => {
    event.preventDefault();
    const assetValue = document.getElementById("liabilities").value;
    if (assetValue !== "") {
      const assetCategory = document.getElementById("assets").value;
      const assetAmount = document.getElementById("asset-amount").value || 0;

      const newAsset = {
        category: assetCategory,
        amount: Number(assetAmount),
      };
      console.log({ newAsset });
      // onAddAsset(newAsset);
      setAssetTotal(assetTotal + newAsset.amount);

      //Clear Inputs
      document.getElementById("assets").value = "select";
      document.getElementById("asset-amount").value = "";
    }
  };

  return (
    <>
      <tr>
        <th>
          <label htmlFor="assets">Asset Category</label>
        </th>
        <th>Asset Amount</th>
        <th>Current Assets</th>
        <th>Asset Total:${assetTotal}</th>
      </tr>
      <tr>
        <td>
          <select id="assets" name="assets">
            <option value="select">Select</option>
            <option value="cash">Cash</option>
            <option value="retirement">Retirement</option>
            <option value="investment">Investment</option>
            <option value="equity">Home Equity</option>
            <option value="other">Other</option>
            {document.getElementById("assets")?.value === "other" && (
              <input
                type="text"
                name="other"
                id="other"
                placeholder="Other description"
              />
            )}
          </select>
        </td>
        <td>
          <input type="number" id="asset-amount"></input>
          <button onClick={(event) => handleAddAsset(event)}>Add</button>
        </td>
        <td>
          {/* static method to check if assets  is an array then display*/}
          <ul>
            {Array.isArray(assets) &&
              assets.map((asset, index) => (
                <li key={index}>
                  {asset.category}: ${asset.amount.toFixed(2)}{" "}
                </li>
              ))}
          </ul>
        </td>
        <td></td>
      </tr>
    </>
  );
};

export default Asset;
