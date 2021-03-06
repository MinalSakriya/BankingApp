import React from 'react';

const TransactionForm = (props) => {

  if(!props.accounts) return <p>Loading</p>
  const options = props.accounts.map((account, index) => {
    return <option key={index}
    value={account._links.self.href}>{account.accountType}
    </option>
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const submit = {
      "description": event.target.description.value,
      "amount": event.target.amount.value,
      "transactionDate": Date.now(),
      "account":event.target.account.value
    }
    props.onSubmit(submit);
  }

  return (

    <div className="Accounts-Transactions">
      <form onSubmit={handleSubmit}>
      <h4>Make New Transaction:</h4>
      <p>Description: <input type="text" placeholder="Description" name="description"/></p>
      <p>Amount: <input type="text" placeholder="Amount" name="amount"/></p>
      <select name="account" onChange={props.selectAccount}>
      <option disabled selected="defaultValue">Select an Account</option>
      {options}
      </select>
      <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default TransactionForm;
