import React, { createContext, useState } from "react"
import Login from "../Hooks/Login"
import User from '../Hooks/User'

 export const Appcontext = createContext(null)

const ContextHook = () => {
    const [userName, setUserName] = useState("")

    return (
        <Appcontext.Provider value = {{userName, setUserName}}>
            <Login/>
            <User/>
        </Appcontext.Provider>
    )
}
export default ContextHook;