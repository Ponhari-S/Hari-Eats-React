import React from 'react';

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            setData:{
                name:"Hari",
                location:"Bangalore"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const json = await data.json();
        console.log("Component Did Mount");

        this.setState({
            setData:{
                name: json.name,
                location: json.address.city
            }
        });
    }

    render(){
        return(
            <div>
                <h1>This is Profile Class Component</h1>
                <h2>Name: { this.state.setData.name }</h2>
                <h2>Location: {this.state.setData.location}</h2>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Count</button>
            </div>
        )
    }

}

export default ProfileClass;