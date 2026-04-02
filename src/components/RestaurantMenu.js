import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRest from "../utils/useRest";
import useRestMenu from "../utils/useRestMenu";

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
  
    const restaurantInfo = useRest(id);
    const menuItems = useRestMenu(id);

    if (!restaurantInfo) return <Shimmer />;

  return (
    <div className="p-5 max-w-200">

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