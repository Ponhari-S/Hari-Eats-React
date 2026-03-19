import { useEffect,useState } from "react";
import { mockMenuData } from "./MockMenu";

const useRestMenu = (resId) => {
    const [menuItems, setMenuItems] = useState([]);
    const id = parseInt(resId);
    useEffect(() => {
        const restaurant = mockMenuData.restaurants.find(
            (res) => res.id == id
          );
      
          if (restaurant) {
            setMenuItems(restaurant.menu);
          }
    }, [id]);

    return menuItems;
}

export default useRestMenu;