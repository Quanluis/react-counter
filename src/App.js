import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      value: 1
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
    this.handleChange = this.handleChange.bind(this)
    
  }
  increment (){
    this.setState({count: this.state.count + this.state.value})
  }
  decrement (){
    this.setState({count: this.state.count - this.state.value})
  }
  reset(){
    this.setState({count: 0} )
  }
  onChange(){
    this.setState ({value: /*number*/})
  }
  render() {
    return (
    <div>
    <button onClick = {this.increment}>
      +
    </button>
    <button onClick = {this.decrement}> -
    </button>
    <h1>
      {this.state.count}
    </h1>
    <button onClick = {this.reset}>
      reset
    </button>
    <form >
      <input onChange = {this.handleChange} type="number" >
       
      </input>
    </form>
    </div>
    );
  }
}

export default App;
