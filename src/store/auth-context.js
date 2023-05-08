import React,{useState} from "react"
const AuthContext=React.createContext({
    token:"",
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
});

export const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem('auth_token')
    const [token,setToken]=useState(initialToken)
    const userIsLoggedIn=!!token;

    const loginHandler=(token)=>{
        setToken(token)
        localStorage.setItem('auth_token',token);
        setTimeout(()=>{
            localStorage.removeItem('auth_token')
        },300000)
    }
    const logOutHandler=()=>{
        setToken(null)
        localStorage.removeItem('auth_token')

    }

    const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logOutHandler
    }

    return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
    );
}
    export default AuthContext;