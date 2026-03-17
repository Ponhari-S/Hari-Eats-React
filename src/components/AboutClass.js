import ProfileClass from "./ProfileClass";
import React from "react";

class AboutClass extends React.Component{
    constructor(props){
        super(props);
    }
    async componentDidMount(){
        console.log("Component Did Mount");
    }
    render(){
        return(
            <div>
                <h1>About Us !</h1>
                <button>Show Profile</button>
                <ProfileClass name="Hari"/>
            </div>
        )
    }
}

export default AboutClass;