import { useState } from "react";
import { Link } from "react-router-dom"

const Title=()=>{
    return(
        <a href="/" className="logo">
            <img src="https://img.freepik.com/premium-vector/healthy-food-logo_476121-95.jpg?semt=ais_hybrid" alt="logo" />
        </a>
    )
}

const LogedInUser=()=>{
    return(false);
}

const Header=()=>{

    const [isLoggedIn, setIsLoggedIn] = useState(LogedInUser());

    return(
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="./About">About Us</Link></li>
                    <li><Link to="./Contact">Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            <div> {
                isLoggedIn ? <button className="login-btn" onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button className="login-btn" onClick={() => setIsLoggedIn(true)}>Login</button>}
            </div>
        </div>
    )
}

export default Header;