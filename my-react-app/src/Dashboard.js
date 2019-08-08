import React, {useState} from "react"

const Dashboard = () => {
    const [strike, setStrike]= useState(0)
     
    

    return (
        <div>
            <button onClick={setStrike}>strike</button>
            <button>ball</button>
            <button>foul</button>
            <button>hit</button>
        </div>
    )
}

export default Dashboard