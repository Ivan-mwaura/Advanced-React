import React, { useReducer } from "react"
import "../App.css"
const PracticeReducer = () => {

    const reducer = (state, action) => {
        switch(action.type){
            case "INCREMENT":
                return {count: state.count + 1, showtext: !state.showText};
            case "toggleShowText":
                return {count: state.count, showText: !state.showText}
            default :
                return state;

        }
    }

   const [state, dispatch] = useReducer(reducer,{count:0, showText :true})

    return(
        <div className="main--container">
            <div className ="elements_div">
                <h1>{state.count}</h1>
                {state.showText && <p>Am a show text</p>}
                <button
                   onClick={()=> {
                    dispatch({type: "INCREMENT"})
                    dispatch({type: "toggleShowText"})
                   }} 
                >
                Click</button>
                <button
                onClick={()=> {
                    dispatch({type:"toggleShowText"})
                }}
                >ShowText</button>
            </div>     
        </div>
    )
}
export default PracticeReducer;