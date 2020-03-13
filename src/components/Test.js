import React, {Component} from "react";

class Test extends Component{
    render() {
        console.log(this.props);
        const {name, age, profession} = this.props
        return(
            <div>
                <p>Name : { name }</p>
                <p>Age : { age }</p>
                <p>Profession : { profession }</p>
            </div>
        );
    }
}

export default Test;