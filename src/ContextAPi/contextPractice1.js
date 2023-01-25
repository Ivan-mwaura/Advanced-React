import React, { useState } from 'react'
import { createContext } from 'react';
import Parent1 from './Parent1';
import Child1 from './Child_1';
import Grandchild1 from './Grandchild1';

export const Appcontext = createContext(null)
 
const ContextAP = () => {

    const [userName, setUserName] = useState("")
    const [count, setCount] = useState(0)
    
    return(
        <Appcontext.Provider value ={{userName,setUserName , count, setCount}}>
            <Parent1/>
            <Child1/>
            <Grandchild1/>
        </Appcontext.Provider>
    )
}
export default ContextAP;