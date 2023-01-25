import React, { useContext } from "react"
import { Appcontext } from "../ContextAPi/contextPractice1";
import "../App.css"

const Parent1 = () => {
    const {setUserName} = useContext(Appcontext);
    
    return(
        <div className="main">
            <div className="container">
                <input type="text" onChange={(e) => {
                    setUserName(e.target.value)
                }}/>
            </div>
        </div>
    )
}
export default Parent1;