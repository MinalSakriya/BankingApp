// import React, {Component} from 'react';
// import SingleCustomer from '../components/SingleCustomer';
// import Request from '../helpers/request';
//
// class CustomerContainer extends Component {
//
//   constructor(props){
//     super(props);
//     this.state = {
//       customers: [],
//     }
//     console.log(props);
//   }
//
//
//   componentDidMount(){
//     const request = new Request()
//     const url = '/api/customers/'
//     request.get(url).then((data) => {
//       console.log(data);
//       this.setState({customers: data._embedded.customers[0]})
//       console.log('data in customer container', data._embedded.customers[0]);
//     })
//   }
//
//
//
//   render(){
//     return(
//       <div>
//       <SingleCustomer customer={this.state.customers} />
//       </div>
//     )
//   }
// }
//
// export default CustomerContainer;
