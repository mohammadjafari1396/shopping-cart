import React,{useState} from "react"

export const AuthContext = React.createContext({
    isAuth: false,
    login: () => {},
    shoppingCartItems: []
})

const AuthContextProvider = (props) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [cartItems] = useState([])

    const loginHandler = () => {
        setIsLoggedIn(true)
    }

    return (
        <AuthContext.Provider
            value={{
                isAuth: isLoggedIn,
                login: loginHandler,
                shoppingCartItems: cartItems,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider