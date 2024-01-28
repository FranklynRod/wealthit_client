import React from 'react'

const Asset = () => {
  //Asset State
 

  return (
    <><label for="cars">Asset Description</label><select id="assets" name="assets">
          <option value="cash">Cash</option>
          <option value="retirement">Retirement</option>
          <option value="investment">Investment</option>
          <option value="equity">Home Equity</option>
          <option value="other">Other</option>
      </select><input type="text" name="other" id="other"></input>
        Asset Amount
        <input id='asset-amount'></input>
        <button>Add</button>
        <p>Asset Total: </p></>
        
  )
}

export default Asset