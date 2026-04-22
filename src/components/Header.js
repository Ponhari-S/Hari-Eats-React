import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import useAuth from "../utils/useAuth";
import UserContact from "../utils/UserContact";
import store from "../utils/Store";
import { useSelector } from "react-redux";

const Title=()=>{
    return(
        <a className="no-underline text-inherit" href="/">
            <img data-testid="logo" className="w-25 h-25" src="https://img.freepik.com/premium-vector/healthy-food-logo_476121-95.jpg?semt=ais_hybrid" alt="logo" />
        </a>
    )
}

const Header=()=>{

    const cart=useSelector((store)=>store.cart.items);

    const { isLoggedIn,setIsLoggedIn, login, logout } = useAuth();

    const {user} = useContext(UserContact);

    return(
        <div className="flex justify-between items-center py-2.5 px-5 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
            <Title />
            <div>
                <ul className="list-none flex gap-5">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/instamart">Instamart</Link></li>
                    <li><Link to="/cart" data-testid="cart">Cart-{cart.length}</Link></li>
                </ul>
            </div>
            <h1 className="text-red-600 font-bold">{user.name}</h1>
            <div> {
                isLoggedIn ? <button className="py-2.5 px-5 border-none bg-[#267919] text-white rounded-sm cursor-pointer hover:bg-[#1b5613]" onClick={()=>logout()}>Logout</button> : <button className="py-2.5 px-5 border-none bg-[#267919] text-white rounded-sm cursor-pointer hover:bg-[#1b5613]" onClick={()=>login()}>Login</button>}
            </div>
        </div>
    )
}

export default Header;