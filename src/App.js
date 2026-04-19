import React,{lazy,Suspense,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/UserContact.js";
import { Provider } from "react-redux";
import store from "./utils/Store.js";
import Cart from "./components/Cart.js";

const root=ReactDOM.createRoot(document.getElementById("root"));

const Instamart=lazy(()=>import("./components/Instamart"));

const AppLayout=()=>{

    const [user, setUser]=useState({
        name:"HariPantDC",
        email:"hari9923@gmail.com"
    })

    return(
        <Provider store={store}>
        <userContext.Provider value={
            {
                user:user,
                setUser:setUser
            }
            }>
        <Header />
        <Outlet />
        <Footer />
        </userContext.Provider>
        </Provider>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />,
                children:[
                    {
                        path:"profile",
                        element:<Profile name="Hari"/>
                    }
                ]
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu />
            },
            {
                path:"/instamart",
                element:<Suspense fallback={<Shimmer />}>
                    <Instamart />
                    </Suspense>
            },
            {
                path:"/cart",
                element:<Cart />
            }
        ]
    }
])

root.render(<RouterProvider router={appRouter} />)