import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { FETCH_MENU_URL } from "../config";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body=()=>{
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [allRestaurants,setAllrestaurants] = useState([]);

useEffect(()=>{
    getRestaurants();
},[])

async function getRestaurants(){
    const data = await fetch(FETCH_MENU_URL);
    const json = await data.json();
    setAllrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

const isOnline=useOnline();

if(!isOnline){
    return <h1>Offline, Please check your internet connection</h1>
}

return (allRestaurants.length === 0) ? <Shimmer/> : (
        <>
        <div className="flex justify-center my-5 mx-0">
            <input type="text" className="w-75 p-2.5 border border-[#ddd] rounded-l-sm outline-none" placeholder="Search for restaurants and food" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
            }} />
            <button className="py-2.5 px-5 border-none bg-[#267919] text-white rounded-r-sm cursor-pointer hover:bg-[#1b5613]" onClick={()=>{
                setRestaurants(filterData(searchText, allRestaurants))
                }}>Search</button>
        </div>
        <div className="flex flex-wrap justify-center" data-testid="restaurant-list">
            {
                restaurants.length === 0 ? <h1>No restaurant found</h1> :
                restaurants.map((restaurant,index)=>{
                    if(restaurant.length === 0) return <h1>No restaurant found</h1>
                    return <Link to={`./restaurant/${101 + (index % 8)}`} key={restaurant.info.id}><RestaurantCard key={restaurant.info.id} {...restaurant.info}/></Link>
                })
            }
        </div>
        <div className="h-20"></div>
        </>
    )
}

export default Body;