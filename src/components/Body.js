import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";

const filterData=(searchText, restaurants)=>{
    return restaurants.filter((restaurant)=>{
        return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
    })
}

const Body=()=>{
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [allRestaurants] = useState(restaurantList);
    return(
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
                restaurants.map((restaurant)=>{
                    return <RestaurantCard key={restaurant.data.name} {...restaurant.data}/>
                })
            }
        </div>
        </>
    )
}

export default Body;