import React, { useContext } from 'react'
import { Appcontext } from '../ContextAPi/Context';

const User = () => {
    const{userName} = useContext(Appcontext);
    return(
        <div>
            <p>user : {userName}</p>
        </div>
    )
}
export default User;