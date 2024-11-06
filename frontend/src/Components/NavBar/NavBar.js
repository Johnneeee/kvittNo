// import "./App.css"
import React from "react";
import "./NavBar.css" 

const NavBar = (props) => {
    return <div className="navBar" >
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div>

}
export default NavBar;
