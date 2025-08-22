
import { createContext, useState } from "react"

const AuthContext = createContext(null); //creation of context

const AuthContextWrapper = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const login = () => {
        setLoggedIn(true);
        setLoggedInUser({ name: "kritika", email: "kritikasj99@gmail.com",imageUrl:"https://media.licdn.com/dms/image/v2/D4D03AQGrnp0kAlZoeg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1694271232364?e=2147483647&v=beta&t=OwznVLjWVpMlHE6VQIpyNa0IYXINJZC-CystuFbcW78" });
    }
    const logout = () => {
        setLoggedIn(false);
        setLoggedInUser(null);
    }
    return (
        <AuthContext.Provider value={{ isLoggedIn, loggedInUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextWrapper;
export { AuthContext };
