import React from 'react';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

class App extends React.Component {
  state = {
    products: data
  }


  render() {
    return (
      <div className="App">
        <FilterableProductTable products={ this.state.products } /> 
        
      </div>
    );
  }
}

export default App;
