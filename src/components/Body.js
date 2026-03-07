import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";

const Body=()=>{
    let searchText="";
    return(
        <>
        <div className="search">
            <input type="text" className="search-input" placeholder="Search for restaurants and food" value={searchText} onChange={(e)=>{
                searchText=e.target.value;
            }} />
            <button className="search-btn">Search</button>
        </div>
        <div className="body">
            {
                restaurantList.map((restaurant)=>{
                    return <RestaurantCard key={restaurant.data.name} {...restaurant.data}/>
                })
            }
        </div>
        </>
    )
}

export default Body;