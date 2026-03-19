import { mockMenuData } from "./MockMenu";
import { useEffect, useState } from "react";

const useRest = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    useEffect(() => {
        
        const id = parseInt(resId, 10);
          const restaurant = mockMenuData.restaurants.find(
            (res) => res.id == id
          );
      
          if (restaurant) {
            setRestaurantInfo(restaurant);
          }
    }, [resId]);

    return restaurantInfo;
}

export default useRest;