import { createContext, useState } from "react";


export const AuthContext = createContext({
    token: null,
    isAuthenticated: false,
    authenticate: () => { },
    logout: () => { },
});


function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState(null);

    function authenticate(token){
        setAuthToken(token);
        // console.log(token)
    }

    function logout(){
        setAuthToken(null);
    }


    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;