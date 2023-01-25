import React, { useContext } from "react"
import { Appcontext } from "./Context";
import "../App.css"

const Grandchild1 = () => {

    const{userName,count,setCount} = useContext(Appcontext);

    const handleClick = () =>{
        setCount (count + 1 )
    }

    return(
        <div className="main">
            <div>
                <p>User : {count} = {userName}</p>
                <button onClick={handleClick}>
                    User NO 
                </button>
            </div>
        </div>
    )
}
export default Grandchild1;