import { useEffect,useState } from "react";
import { mockMenuData } from "./MockMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

/*   async function getRestaurantInfo(){
        const data=await fetch("https://api.allorigins.win/raw?url=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9192242&lng=78.1105657&restaurantId="+id);
        const json=await data.json();
        if (!json?.data) return;
        const info = json?.data?.cards
            ?.map((card) => card?.card?.card)
            ?.find((card) => card?.info)
            ?.info;
        setRestaurantInfo(info);
        const items = json?.data?.cards
            ?.find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.find((c) => c?.card?.card?.itemCards)
            ?.card?.card?.itemCards;

        setMenuItems(items || []);
    }
*/
const RestaurantMenu = () => {

    const { id } = useParams();
  
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
  
    useEffect(() => {
  
      const restaurant = mockMenuData.restaurants.find(
        (res) => res.id === id
      );
  
      if (restaurant) {
        setRestaurantInfo(restaurant);
        setMenuItems(restaurant.menu);
      }
  
    }, [id]);

    if (!restaurantInfo) return <Shimmer />;

  return (
    <div className="menu-container">

      <h1>{restaurantInfo.name}</h1>

      <h3>{restaurantInfo.cuisines.join(", ")}</h3>

      <p>{restaurantInfo.costForTwoMessage}</p>

      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default RestaurantMenu;