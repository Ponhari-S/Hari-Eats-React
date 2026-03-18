import ProfileClass from "./ProfileClass";
import React from "react";

class AboutClass extends React.Component{
    constructor(props){
        super(props);
    }
    async componentDidMount(){
        this.timer = setInterval(() => {
            console.log("Timer");
        }, 1000);
        console.log("Component Did Mount");
    }
    componentDidUpdate(){
        console.log("Component Did Update");
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Component Will Unmount");
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