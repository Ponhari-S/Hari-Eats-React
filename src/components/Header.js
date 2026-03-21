import { useState } from "react";
import { Link } from "react-router-dom"
import useAuth from "../utils/useAuth";

const Title=()=>{
    return(
        <a href="/" className="logo">
            <img src="https://img.freepik.com/premium-vector/healthy-food-logo_476121-95.jpg?semt=ais_hybrid" alt="logo" />
        </a>
    )
}

const Header=()=>{

    const { isLoggedIn,setIsLoggedIn, login, logout } = useAuth();

    return(
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                    <li><Link to="/Instamart">Instamart</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            <div> {
                isLoggedIn ? <button className="login-btn" onClick={()=>logout()}>Logout</button> : <button className="login-btn" onClick={()=>login()}>Login</button>}
            </div>
        </div>
    )
}

export default Header;