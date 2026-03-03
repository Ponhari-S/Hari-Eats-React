import React from "react";
import ReactDOM from "react-dom/client";

const Title=()=>{
    return(
        <a href="/" className="logo">
            <img src="https://img.freepik.com/premium-vector/healthy-food-logo_476121-95.jpg?semt=ais_hybrid" alt="logo" />
        </a>
    )
}

const Header=()=>{
    return(
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const restaurantList=[
    {
        type:"restaurant",
        data:{
            name:"Curry Leaves",
            cuisines:["Burgers", "Biryani", "Beverages"],
            avgRating:4.2,
            cloudinaryImageId:"RX_THUMBNAIL/IMAGES/VENDOR/2026/2/25/ef1bc544-70f2-47b2-b37f-0c0b044499c4_1045224.JPG"
        }
    },
    {
        type: "restaurant",
        data: {
            name:"McDonald's",
            cuisines:["Burgers", "Fries", "Beverages"],
            avgRating:4.0,
            cloudinaryImageId:"bweqsg26xmnluflb5pgf"
        }
    },
    {
        type:"restaurant",
        data:{
            name:"KFC",
            cuisines:["Burgers", "Fries", "Beverages"],
            avgRating:4.1,
            cloudinaryImageId:"RX_THUMBNAIL/IMAGES/VENDOR/2024/10/14/aa1c19cf-ff92-4af1-8bc1-f427c3c3ddfb_953024.jpg"
        }
    },
    {
        type:"restaurant",
        data:{
            name:"Domino's Pizza",
            cuisines:["Pizza", "Pasta", "Beverages"],
            avgRating:4.3,
            cloudinaryImageId:"FOOD_CATALOG/IMAGES/CMS/2024/10/14/fb1eac2b-7dd9-4f9f-b3da-290c2a5171f8_cc7cc92a-42b4-49a2-88ec-18effbf1a2ae.jpg"
        }
    },
    {
        type:"restaurant", 
        data:{
            name:"Subway",
            cuisines:["Sandwiches", "Salads", "Beverages"],
            avgRating:4.0,
            cloudinaryImageId:"RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/b7ec493b-a62b-409a-aa72-048ec82f7555_623300.JPG"
        }
    },
    {
        type:"restaurant",
        data:{
            name:"Pizza Hut",
            cuisines:["Pizza", "Pasta", "Beverages"],
            avgRating:4.2,
            cloudinaryImageId:"zzxpyryx3vyixw8jftu0"
        }
    },
];

const RestaurantCard=({restaurant})=>{
    const {name, cuisines, avgRating, cloudinaryImageId}=restaurant;
    return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="restaurant" />
            <div className="card-body">
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>Rating: {avgRating}</h4>
            </div>
        </div>
    )
}

const Body=(props)=>{
    return(
        <div className="body">
            <RestaurantCard restaurant={restaurantList[0].data}/>
            <RestaurantCard restaurant={restaurantList[1].data}/>
            <RestaurantCard restaurant={restaurantList[2].data}/>
            <RestaurantCard restaurant={restaurantList[3].data}/>
            <RestaurantCard restaurant={restaurantList[4].data}/>
            <RestaurantCard restaurant={restaurantList[5].data}/>
        </div>
    )
}

const Footer=()=>{
    return(
        <div className="footer">
            <h1>Footer</h1>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

const AppLayout=()=>{
    return(
        <>
        <Header />
        <Body />
        <Footer />
        </>
    )
}

root.render(<AppLayout />)