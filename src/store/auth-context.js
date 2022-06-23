import React, {useState} from 'react'

const AuthContext = React.createContext({
    token:'',
    isLoggedIn: false,
    login(token){}
});


//Manages context related states
export const AuthContextProvider = (props) =>{

    const [token, setToken] = useState(null)

    const userIsLoggedIn = !!token //converts to a true or false boolean value


    const logInHandler = (token) =>{
        setToken(token)
    }

    const logoutHandler = () => {
        setToken(null)
    }

    const contextValue ={
        token:  token,
        isLoggedIn: userIsLoggedIn,
        login: logInHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}


export default AuthContext;