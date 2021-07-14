import React from "react"

const Button=({buttonText})=>{
    return(
        <button className="button" type="submit" onClick={getdata}>{buttonText}</button>
    )
}
 
const getdata=()=>{
    var Name = document.getElementById('name');
    var Value = Name.value;
    document.getElementById('page').innerHTML = "<h1>Hello!! " + Value + " welcome to our page</h1>";
}
export default Button