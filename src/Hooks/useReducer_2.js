import React, { useReducer } from 'react';
import "../App.css"

const PracticeReducer2 =() =>{

    const reducer = (state,action)=>{
        switch(action.type){
            case "REDUCE":
                return {count: state.count - 1 , showResult: state.showResult};
            case "toggleShowResults":
                return {count: state.count, showResult: !state.showResult};
            default:
                return state;
        }
    }
    const[state,dispatch] = useReducer(reducer, {count: 5, showResult: false})
    

    return(
     <div className='main--container'>
        <div >
            <h1>{state.count}</h1>
            {state.showResult && <h2>The count is {state.count}</h2>}
            <button
            onClick={() => {
                dispatch({type: "REDUCE"})
            }}
            >
            reduce
            </button>
            <button
            onClick={() => {
                dispatch({type: "toggleShowResults"})
            }}
            >
            showResult
            </button>
        </div>
     </div>
    )
}
export default PracticeReducer2;