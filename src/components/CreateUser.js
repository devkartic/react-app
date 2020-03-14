import React, {Component} from "react";

class CreateUser extends Component{
    state = {
        name : null,
        age : null,
        profession : null
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.createUser(this.state);
    }

    changeHandler = (e) => {
        this.setState({
           [e.target.id] : e.target.value
        });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <label htmlFor="name"> Name :</label>
                    <input type="text" id="name" onChange={this.changeHandler} />
                    <label htmlFor="age"> Age :</label>
                    <input type="text" id="age" onChange={this.changeHandler} />
                    <label htmlFor="profession"> Profession :</label>
                    <input type="text" id="profession" onChange={this.changeHandler} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateUser;