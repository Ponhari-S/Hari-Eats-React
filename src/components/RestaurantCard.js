import { IMG_URL } from "../config";

const RestaurantCard=({name, cuisines, avgRating, cloudinaryImageId})=>{
    return(
        <div className="card">
            <img src={IMG_URL+cloudinaryImageId} alt="restaurant" />
            <div className="card-body">
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>Rating: {avgRating}</h4>
            </div>
        </div>
    )
}

export default RestaurantCard;