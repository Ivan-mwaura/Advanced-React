import React from "react"
import { Appcontext } from "./Context";
import "../App.css"

const Child1 = () => {

    const{userName} = React.useContext(Appcontext)

    return(
        <div className="main">
            <div>
                <p>{userName}</p>
            </div>
        </div>
    )
}
export default Child1;