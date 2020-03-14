import React, {Component} from "react";

// Class component
class Test extends Component{
    render() {
        const { users } = this.props;
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
}

// Functional component
/*

const Test = ({users}) => { //receive user with destructure
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


export default Test;