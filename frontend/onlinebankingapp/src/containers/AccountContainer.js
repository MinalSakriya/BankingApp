import React, {Component} from 'react';
import AccountList from '../components/AccountList';
import Request from '../helpers/request.js';
import TransactionForm from '../components/TransactionForm';
import SingleCustomer from '../components/SingleCustomer';


class AccountContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      accounts: [],
      customer: null
    }
    this.handleTransactionSubmit = this.handleTransactionSubmit.bind(this);
    this.getAccounts = this.getAccounts.bind(this);
  }

  componentDidMount(){
    this.getAccounts();
    const url2 = '/api/customers/' + this.props.customer.id
    let request2 = new Request()
    request2.get(url2).then((data) => {
      this.setState({customer: data.customer})
    })
  }

  getAccounts(){
    const url = '/api/customers/' + this.props.customer.id + '/accounts'
    let request = new Request()
    request.get(url).then((data) => {
      console.log(data);
      this.setState({accounts: data._embedded.accounts});
      console.log(data);
    });
  }

  handleTransactionSubmit(transaction){

    let request = new Request();
    request.post('/api/transactions', transaction).then(() => {
      this.getAccounts();
    })

    // put / patch an update on the customer to reduce their balance by the value of the transaction

  }



  render(){
    console.log("RENDEREDD");
    return(
      <div>
      <AccountList accounts={this.state.accounts}/>

      <TransactionForm accounts={this.state.accounts} onSubmit={this.handleTransactionSubmit}/>

      <SingleCustomer customer={this.props.customer} />

      </div>
    )

  }


}

export default AccountContainer;
