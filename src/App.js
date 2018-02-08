import React, { Component } from 'react';
import Email from './Email'
import LoginForm from './LoginForm'

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
  handleChange(e){
    this.setState({value: +e.target.value});
  }
  render() {
    return (
    <div>
    <div className ="form-group">
    <form >
      <input className = "form-control" onChange = {this.handleChange}  value={this.state.value}/>
    
    </form>
    
    <button className = "btn-primary" onClick = {this.increment}>
      +
    </button>
    <button className ="btn-primary" onClick = {this.decrement}> -
    </button>
    <h1>
      {this.state.count}
    </h1>
    <button className = 'btn-danger' onClick = {this.reset}>
      reset
    </button>
    </div>
    <Email />
    <LoginForm />
    </div>
    );
  }
}

export default App;
