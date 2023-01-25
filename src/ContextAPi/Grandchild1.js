import React, { useContext } from "react"
import { Appcontext } from "../ContextAPi/contextPractice1";
import "../App.css"

const Grandchild1 = () => {

    const{userName,count,setCount} = useContext(Appcontext);

    const handleClick = () =>{
        setCount (count + 1 )
        console.log(count)
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