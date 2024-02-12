import React from "react";

const Asset = ({ onAddAsset, assets }) => {
  //Add user input into object
  const handleAddAsset = () => {
    const assetValue = document.getElementById('liabilities').value
    if ( assetValue !== ''){
    const assetCategory = document.getElementById("assets").value;
    const assetAmount = document.getElementById("asset-amount").value || 0;

    const newAsset = {
      category: assetCategory,
      amount: assetAmount,
    };
    console.log("handleAsset", newAsset);
    onAddAsset(newAsset);

    //Clear Inputs
    document.getElementById("assets").value = "select";
    document.getElementById("asset-amount").value = "";
  }};

  const getAssetTotal = () => {
    if (Array.isArray(assets)) {
      return assets.reduce((total, asset) => total + parseFloat(asset.amount), 0).toFixed(2);
    } else {
      return 0;
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
        <th>
          Asset Total:${getAssetTotal()} 
        </th>
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
            <input type="text" name="other" id="asset-amount"></input>
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
          <button onClick={handleAddAsset}>Add</button>
        </td>
        <td>
          {/* static method to check if assets  is an array then display*/}
          <ul>
            {Array.isArray(assets) && assets.map((asset, index) => (
              <li key={index}>
                {asset.category}: ${asset.amount.toFixed(2)}{" "}
              </li>
            ))}
          </ul>
        </td>
        <td>

      </td>
      </tr>
    </>
  );
};

export default Asset;
