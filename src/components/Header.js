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
            <h1>Hari Eats</h1>
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

export default Header;