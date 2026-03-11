import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { FETCH_MENU_URL } from "../config";

const filterData=(searchText, restaurants)=>{
    return restaurants.filter((restaurant)=>{
        return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
    })
}

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

return (allRestaurants.length === 0) ? <Shimmer/> : (
        <>
        <div className="search">
            <input type="text" className="search-input" placeholder="Search for restaurants and food" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
            }} />
            <button className="search-btn" onClick={()=>{
                setRestaurants(filterData(searchText, allRestaurants))
                }}>Search</button>
        </div>
        <div className="body">
            {
                restaurants.length === 0 ? <h1>No restaurant found</h1> :
                restaurants.map((restaurant)=>{
                    if(restaurant.length === 0) return <h1>No restaurant found</h1>
                    return <RestaurantCard key={restaurant.info.id} {...restaurant.info}/>
                })
            }
        </div>
        </>
    )
}

export default Body;