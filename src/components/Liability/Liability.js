import React, { useState } from 'react'

const Liability = () => {
        //Liability State
      
          const [liabilityTotal, setLiabilityTotal ] = useState(0)
          
          //Add user input into object
          const handleAddLiability = () => {
              const liabilityCategory = document.getElementById('liabilities').value;
              const liabilityAmount = parseFloat(document.getElementById('liability-amount').value) || 0;
      
              const newLiability = {
                  category: liabilityCategory,
                  amount: liabilityAmount,
              }
      
          //Update the current states
           setLiabilities(...liabilities, newLiability)
           setLiabilityTotal( liabilityTotal + liabilityAmount)
      
           //Clear Inputs
           document.getElementById('liabilities').value = 'select';
           document.getElementById('liability-amount').value = '';
      
          }
  return (
    <>
    <label for="liabilities" >Liability Description</label>
        <select id="liabilities" name="liabilities">
        <option value="select">Select</option>
          <option value="loan">Loan</option>
          <option value="credit-card">Credit Card</option>
          <option value="Klarna">Klarna</option>
          <option value="Afterpay">Afterpay</option>
          <option value="Other">Other</option>
        </select>
        {document.getElementById('liabilities')?.value === 'other' && (
        <input type="text" name="other" id="other" placeholder="Other description" />
      )}
        Liability Amount
        <input id='liability-amount'></input>
        <button onClick={handleAddLiability}>Add</button>
        <p>Liability Total:${liabilityTotal.toFixed(2)} </p>
        <ul>
            {liabilities.map((liability, index) => (<li key={index}>{liability.type}: ${liability.amount.toFixed(2)} </li>))}
        </ul>
        </>
  )
}

export default Liability