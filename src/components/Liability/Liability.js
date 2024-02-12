import React from 'react'

const Liability = ({ onAddLiability,liabilities}) => {  
          //Add user input into object
          const handleAddLiability = () => {
            const liabilityValue = document.getElementById('liabilities').value
            if ( liabilityValue !== '')
            {
              const liabilityCategory = document.getElementById('liabilities').value;
              const liabilityAmount = parseFloat(document.getElementById('liability-amount').value) || 0;
      
              const newLiability = {
                  category: liabilityCategory,
                  amount: liabilityAmount,
              }
              onAddLiability(newLiability);

           //Clear Inputs
           document.getElementById('liabilities').value = 'select';
           document.getElementById('liability-amount').value = '';
          }}
          const getLiabilityTotal = () => {
            if (Array.isArray(liabilities)) {
              return liabilities.reduce((total, liability) => total + parseFloat(liability.amount), 0).toFixed(2);
            } else {
              return 0;
            }
          };
  return (
    <>
    <tr>
      <th><label for="liabilities" >Liability Category</label></th>
      <th> Liability Amount</th>
      <th>Current Assets</th>
      <th>Liability Total:${getLiabilityTotal()}</th>
    </tr>
    <tr>
      <td>
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
      </td>
      <td>   
        <input id='liability-amount'></input>
        <button onClick={handleAddLiability}>Add</button></td>
        <ul>
        {Array.isArray(liabilities) && liabilities.map((liability, index) => (
              <li key={index}>
                {liability.category}: ${liability.amount.toFixed(2)}{" "}
              </li>
            ))}
        </ul>
    </tr>
        </>
  )
}

export default Liability