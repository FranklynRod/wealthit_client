import React from 'react'

const Asset = ({onAddAsset}) => {
    
    //Add user input into object
    const handleAddAsset = () => {
        const assetCategory = document.getElementById('assets').value;
        const assetAmount = parseFloat(document.getElementById('asset-amount').value) || 0;

        const newAsset = {
            category: assetCategory,
            amount: assetAmount,
        }

       onAddAsset(newAsset)

     //Clear Inputs
     document.getElementById('assets').value = 'select';
     document.getElementById('asset-amount').value = '';

    }
   

  return (
    <><label htmlFor="assets">Asset Description</label>
        <select id="assets" name="assets">
        <option value="select">Select</option>
          <option value="cash">Cash</option>
          <option value="retirement">Retirement</option>
          <option value="investment">Investment</option>
          <option value="equity">Home Equity</option>
          <option value="other">Other</option>
      </select><input type="text" name="other" id="asset-amount"></input>
      {document.getElementById('assets')?.value === 'other' && (
        <input type="text" name="other" id="other" placeholder="Other description" />
      )}
        Asset Amount
        <input type="number" id='asset-amount'></input>
        <button onClick={handleAddAsset}>Add</button>
        <p>Asset Total:${assetTotal.toFixed(2)} </p>
        <ul>
            {assets.map((asset, index) => (<li key={index}>{asset.type}: ${asset.amount.toFixed(2)} </li>))}
        </ul>
        </>
        
  )
}

export default Asset