import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About =()=>{
    return(
        <div>
            <h1>About Us !</h1>
            <button>Show Profile</button>
            <Outlet />
            <Profile name="Hari"/>
            <ProfileClass name="Hari"/>
        </div>
    )
}

export default About;