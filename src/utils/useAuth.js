import { useState,useEffect } from "react";

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

        const login = () => {
            setIsLoggedIn(true);
        }
        const logout = () => {
            setIsLoggedIn(false);
        }
        return { isLoggedIn, setIsLoggedIn, login, logout };
}

export default useAuth;