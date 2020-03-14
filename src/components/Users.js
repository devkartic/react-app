import React, {Component} from "react";

// Class component
class Users extends Component{
    render() {
        const { users, deleteUser } = this.props;
        const userList = users.map(user=>{
            if(user.age > 25) {
                return (
                    <div key={user.id}>
                        <p>Name : {user.name}</p>
                        <p>Age : {user.age}</p>
                        <p>Profession : {user.profession}</p>
                        <button onClick={()=>{deleteUser(user.id)}}>Delete</button>
                    </div>
                );
            }
        });

        return(
            <div>
                { userList }
            </div>
        );
    }
}

// Functional component
/*

const Users = ({users}) => { //receive user with destructure
    const userList = users.map(user=>{
        return (
            <div key={user.id}>
                <p>Name : { user.name }</p>
                <p>Age : { user.age }</p>
                <p>Profession : { user.profession }</p>
            </div>
        );
    });

    return(
        <div>
            { userList }
        </div>
    );
}
*/


export default Users;