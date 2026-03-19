export const filterData=(searchText, restaurants)=>{
    return restaurants.filter((restaurant)=>{
        return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
    })
}

