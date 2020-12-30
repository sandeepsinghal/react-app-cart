
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';


class App extends Component{
    state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props){
    super(props);
    console.log('App - Constructor');
    
  }

  componentDidMount(){
      // AJAX Call
      //this.setState("{data")
      console.log('App - Mounted');
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("here");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event handler called : ", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render(){
    console.log('App - Rendered');
    return (
      <React.Fragment>
        <NavBar totalCounters = {this.state.counters.length}/>
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement}
            onDelete = {this.handleDelete}
           />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
