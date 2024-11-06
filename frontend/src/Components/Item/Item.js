// import "./App.css"
import React from "react";
import "./Item.css" 

const Item = (props) => {
    return <div className="item" >
        <img 
        src={props.picture}
        alt="Image"
        // style="width:100%"
        />
        <div className="description">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.location}</p>
        </div>
    </div>

}
export default Item;