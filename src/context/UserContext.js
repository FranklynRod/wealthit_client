import { useState, createContext } from "react";
import Cookies from "js-cookie";
import { api } from "../utils/apiHelper";

const UserContext = createContext(null);

export const UserProvider = (props) => {
    const cookie = Cookies.get("authenticatedUser")
    
    //State
    const [authUser, setAuthUser] = useState(cookie ? JSON.parse(cookie) : null);
    
    const signIn = async (credentials) => {
        const response = await api("/account", "GET", null, credentials)
        if (response.status === 200){
            const user = await response.json();
            user.password = credentials.password
            setAuthUser(user);
            Cookies.set("authenticatedUser", JSON.stringify(user),{expires:1})
            return user
        }else if (response.status === 401){
            return null
        } else{
            throw new Error();
        }

    }
    const signOut = () => {
        setAuthUser(null);
        Cookies.remove("authenticatedUser");
    }
    
    return(
        <UserContext.Provider value={{authUser, actions:{signIn,signOut}}}>
            {props.children}
        </UserContext.Provider>
    )

}

