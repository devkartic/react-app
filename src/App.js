import React, {Component} from 'react';
import './App.css';
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
class App extends Component{
    state = {
        users : [
            {id : 1, name : 'John',age : 27, profession : 'Programmer'},
            {id : 2, name : 'Bablu',age : 25, profession : 'Automation Engineer'},
            {id : 3, name : 'Kartic',age : 30, profession : 'Sr. Programmer'},
            {id : 4, name : 'Juton',age : 35, profession : 'Businessman'},
        ]
    };
  render() {
    return (
        <div className="App">
            <h1>My First React App</h1>
            <p>Welcome to my app :)</p>
            <Users users={this.state.users}/>
            <CreateUser />
        </div>
    );
  }
}

export default App;
