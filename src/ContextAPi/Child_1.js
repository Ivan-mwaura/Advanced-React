import React ,{useContext} from "react"
import { Appcontext } from "../ContextAPi/contextPractice1";
import "../App.css"

const Child1 = () => {

    const{userName} = useContext(Appcontext)

    return(
        <div className="main">
            <div>
                <p>NAME : {userName}</p>
            </div>
        </div>
    )
}
export default Child1;