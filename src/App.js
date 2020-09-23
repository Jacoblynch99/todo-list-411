import React, { Component } from 'react';
import './App.css';
import FirstComponent from './components/firstComponent';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      items: []
    };
  }

  inputUpdate = event => {
    this.setState({input: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    this.setState({
      items : [...this.state.items, [this.state.input, false]],
      input: '',
    })
  }

  removeTodo = (i) => {
    const arrayOfItems = this.state.items
    arrayOfItems.splice(i, 1)
    this.setState({
      items: [...arrayOfItems]
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.formSubmit.bind(this)}>
            <input value={this.state.input} onChange={this.inputUpdate.bind(this)}></input>
            <button>Submit</button>
          </form>
          <div>
            <FirstComponent items={this.state.items} removeItem={(i) => this.removeTodo(i)}/>
          </div>
        </header>
      </div>
    );
  }
}


export default App;
