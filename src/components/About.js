import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { useContext } from "react";
import UserContact from "../utils/UserContact.js";
import {user, setUser} from "../App.js";

const About =()=>{
    const {user}=useContext(UserContact);

    return(
        <div>
            <h1>About Us !</h1>
            <button>Show Profile</button>
            <Outlet />
            <Profile name="Hari"/>
            <ProfileClass name="Hari"/>
            <h1>{user.name}</h1>
        </div>
    )
}

export default About;