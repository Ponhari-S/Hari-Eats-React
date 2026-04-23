import { IMG_URL } from "../config";

const RestaurantCard=({name, cuisines, avgRating, cloudinaryImageId})=>{
    return(
        <div className="w-75 h-100 border border-[#ddd] rounded-lg overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.1)] m-5" data-testid="restaurant-card">
            <img className="w-full h-50 object-cover" src={IMG_URL+cloudinaryImageId} alt="restaurant" />
            <div className="p-3.75">
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>Rating: {avgRating}</h4>
            </div>
        </div>
    )
}

export default RestaurantCard;