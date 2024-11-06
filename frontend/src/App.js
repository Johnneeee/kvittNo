import logo from './logo.svg';
import './App.css';
import Item from "./Components/Item/Item";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import CreateCard from "./Components/CreateCard/CreateCard";
// import { Component } from 'react';


function App() {
  return (
    <div className="App">
      {/* <div class="grid-container">
        <div class="item1">Header</div>
        <div class="item2">Menu</div>
        <div class="item3">Main</div>  
        <div class="item4">Right</div>
        <div class="item5">Footer</div>
      </div> */}
      <div className="navBar">
        <NavBar />
      </div>
      <div className='header'>
        <Header/>
      </div>
      <div className='createCard'>
        <CreateCard/>
      </div>
      <div className="contents">
        <Item picture="Statics/eple.jpg" title="Eple" description="Norsk eple fra kiwi" location="Oslo"/>
        <Item picture="Statics/strap.jpg" title="Strap" description="20mm strap fra strapcode" location="Bergen"/>
        <Item picture="Statics/tyggis.jpg" title="Tyggis" description="Tom tyggispakke" location="Arendal"/>
        <Item picture="Statics/vannflaske.jpg" title="Vannflaske" description="Sjelden vannflaske fra 2001" location="Oslo"/>
      </div>
    </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
