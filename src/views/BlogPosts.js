import React, { Component } from 'react';

import axios from 'axios';

const API = 'http://localhost:8000/customers/';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [],
      isLoading: false,
      error: null,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(API)
      .then(result => this.setState({
        count: result.data.count,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }
  render() {
    return (
      <div>
      
      </div>
      
    )
  }
  
}
export default App;