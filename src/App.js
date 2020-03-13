import React, {Component} from 'react';
import './App.css';
import Test from "./components/Test";
class App extends Component{
  render() {
    return (
        <div className="App">
            <h1>My First React App</h1>
            <p>Welcome to my app :)</p>
            <Test name={'John'} age={27} profession={'Programmer'}/>
            <Test name={'Bablu'} age={30} profession={'Automation Engineer'}/>
        </div>
    );
  }
}

export default App;
