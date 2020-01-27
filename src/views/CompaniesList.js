import React, { Component } from 'react';


import Companies from './Companies';

export class CustomersList extends Component {

      state = {
        companies: []
      }


      componentDidMount() {
        fetch('http://localhost:8000/companies/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ companies: data })
        })
        .catch(console.log)
      }

    render() {
        return (
          <Companies companies={this.state.companies} />
        )
      }
    };

export default CustomersList;
  

      