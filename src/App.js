import React, {Component} from 'react';
import './App.css';
import Test from "./components/Test";
class App extends Component{
    state = {
        users : [
            {id : 1, name : 'John', profession : 'Programmer'},
            {id : 2, name : 'Bablu', profession : 'Automation Engineer'},
            {id : 3, name : 'Kartic', profession : 'Sr. Programmer'},
            {id : 4, name : 'Juton', profession : 'Businessman'},
        ]
    };
  render() {
    return (
        <div className="App">
            <h1>My First React App</h1>
            <p>Welcome to my app :)</p>
            <Test users={this.state.users}/>
        </div>
    );
  }
}

export default App;
