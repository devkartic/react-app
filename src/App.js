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

    createUser = (user) => {
        user.id = Math.random();
        let users = [...this.state.users, user];
        this.setState({
            users : users
        })
    }

    deleteUser = (id) => {
        let users = this.state.users.filter((user)=>{
            return user.id !==id;
            /*if(user.id==id) return null;
            return user;*/
        });

        this.setState({
            users : users
        })
    }

    componentDidMount() {
        console.log('component did mounted');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component updated');
        console.log(prevState, prevProps, snapshot);
    }

    render() {
    return (
        <div className="App">
            <h1>My First React App</h1>
            <p>Welcome to my app :)</p>
            <Users deleteUser={this.deleteUser} users={this.state.users}/>
            <CreateUser createUser = {this.createUser} />
        </div>
    );
  }
}

export default App;
