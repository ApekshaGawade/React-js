import React from "react"
import "./style.css"
import Button from "./Button"

const App=()=>
{
    return(
            <div id="page">
                <h1 style={{textAlign:"center"}}>Hello</h1>
                <h1 style={{textAlign:"center"}}>Welcome Here</h1>
                 <h2 style={{textAlign:"left"}}>Please enter your name</h2>
                 <input type="text" placeholder="Your Name" id="name" />
                <Button buttonText="Submit"/>      
            </div>
    )
}
export default App