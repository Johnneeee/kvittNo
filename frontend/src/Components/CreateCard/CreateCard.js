// import "./App.css"
import React from "react";
import "./CreateCard.css" 

const CreateCard = (props) => {
    return <div className="createCard" >
        {/* <button>heihei</button> */}
        <form action="test">
            <input type="file" id="id" name="fileName">
            </input>
            <input type="submit">
            </input>
        </form>
    </div>

}
export default CreateCard;