import React, { useContext } from 'react'
import { Appcontext } from '../ContextAPi/Context';

const Login = () => {

    const {setUserName} = useContext(Appcontext)

    return(
        <div>
            <input type= "text" onChange={(e) => {setUserName(e.target.value)}} name = "text" />
        </div>
    )
}
export default Login;