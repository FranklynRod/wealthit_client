import React from 'react'

const Liability = () => {
  return (
    <>
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
        <input id='liability-amount'></input>
        <p>Liability Total: </p>
        </>
  )
}

export default Liability