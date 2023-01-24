import React, { useEffect } from 'react';

const UseEffect1 = () =>{
    const [data,setData] = React.useState({})
    
    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(res => setData(res))
        console.log(data)
    },[])
    return(
        <div>
        {
            Object.entries(data).map(([key,value]) => {
                return(
                    <div key = {key}>
                        <p>{value.postId}</p>
                        <p>{value.id}</p>
                        <p>{value.name}</p>
                        <p>{value.body}</p>
                    </div>
                )
            })
        }
            
           {/*{data.map(dt => {
            return (
                <div key = {dt.id}>
                    <p>{dt.postId}</p>
                    <p>{dt.id}</p>
                    <p>{dt.name}</p>
                    <p>dt{dt.body}</p>
                </div>
            )
           })}*/}
        </div>
    )
}
export default UseEffect1;