import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import store from "../../utils/Store"
import { StaticRouter } from "react-router-dom/server"

test('Logo should load first', () => {
    const header=render(
    <StaticRouter>
    <Provider store={store}>
        <Header/>
    </Provider>
    </StaticRouter>
        );
    
        const logo=header.getByTestId("logo");
        expect(logo.src).toBe("https://img.freepik.com/premium-vector/healthy-food-logo_476121-95.jpg?semt=ais_hybrid");
})

test('Cart should have 0 items initially', () => {
    const header=render(
    <StaticRouter> 
    <Provider store={store}>
        <Header/>
    </Provider>
    </StaticRouter>
        );

        const cart=header.getByTestId("cart");
        expect(cart).innerHTML="Cart-0";
});