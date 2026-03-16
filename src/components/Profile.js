import { useState } from "react";
const Profile=(props)=>{

    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>This is Profile Component</h1>
            <h2>Name: { props.name }</h2>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(count+1)}>Count</button>
        </div>
    )
}

export default Profile;
