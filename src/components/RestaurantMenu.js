import { useEffect,useState } from "react";
import { mockMenuData } from "./MockMenu";
//import { useParams } from "react-router";

const RestaurantMenu =()=>{

    //const { id }=useParams();

    
    const[restaurantInfo,setRestaurantInfo]=useState({});

//    async function getRestaurantInfo(){
//        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9192242&lng=78.1105657&restaurantId=559820&catalog_qa=undefined&submitAction=ENTER");
//        const json=await data.json();
//        console.log(json.data.cards);
//        setRestaurantInfo(json?.data?.cards
//            ?.map((card) => card?.card?.card)
//            ?.find((card) => card?.info)
//            ?.info);
//    }

    useEffect(()=>{
        setRestaurantInfo(mockMenuData);
    },[]);

    return(
        <div className="menu-container">
            <h1>{restaurantInfo?.name}</h1>
            <h3>{restaurantInfo?.cuisines?.join(", ")}</h3>
            <p>{restaurantInfo?.costForTwoMessage}</p>
            <ul>
                {restaurantInfo?.itemCards?.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - ₹{item.card.info.price / 100}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;