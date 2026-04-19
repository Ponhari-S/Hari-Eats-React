import { useDispatch, useSelector } from "react-redux";

const Cart = () =>{
    const cart=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const clearCart=()=>{
        dispatch({type:"cart/clearCart"});
    }

    return (
        <div className="p-5">
            <h1 className="p-5 text-4xl font-bold">Cart Items-{cart.length}</h1>
            <button className="p-5 bg-green-100 rounded-xl" onClick={()=> clearCart()}>Clear Cart</button>
            <div className="p-5 text-2xl">
                <ul>
                    {cart.map((item)=>(
                        <li key={item.id}>{item.name} - ₹{item.price/100}</li>
                    ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Cart;