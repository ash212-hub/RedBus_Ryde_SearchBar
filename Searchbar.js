import React from 'react';
import './Searchbar.css';
import Head from "./head"

function Searchbar() {
  function textHandler(){
    document.getElementById('up').style.top="-20px";
    document.getElementById("up").style.transition="all 0.1s";
    document.getElementById('pickin').style.top="-20px";
    document.getElementById("pickin").style.transition="all 0.1s";
    document.getElementById('pickin').style.fontSize="14px";  
  }
  function moveBy(){
    document.getElementById('up').style.top="0px";
    document.getElementById('pickin').style.top="0px";
    document.getElementById("pickin").style.transition="all 0.1s";
    document.getElementById('pickin').style.fontSize="18px";

  }
  function reackDown(){
    document.getElementById('down').style.top="-20px";
    document.getElementById("down").style.transition="all 0.1s";
    document.getElementById('downin').style.top="-20px";
    document.getElementById("downin").style.transition="all 0.1s";
    document.getElementById('downin').style.fontSize="14px";  
  }
  function reckIn(){
    document.getElementById('down').style.top="0px";
    document.getElementById('downin').style.top="0px";
    document.getElementById("downin").style.transition="all 0.1s";
    document.getElementById('downin').style.fontSize="17px";

  }

 
  return (
    <div>
      
      <div id="outer">
        <div id="hed">
          <div className="hed1" >outstation</div>
          <div className="hed1">hourly rental</div>
          <div className="hed1">airport transport</div>
          <div id="bar" ></div>
        </div>
        <div id="main">
          <img id="send" src="https://www.redbus.in/bushire/static/icons/ArrowSwap.svg" alt="" />
          <div id="pick" >
            <img id='up' src="https://www.redbus.in/bushire/static/icons/LeadgenIcons/CabBP.svg" alt="" />
            <input id='pickup' onClick={textHandler} onDoubleClick={moveBy} type="text" required="" /><label htmlFor="" id='pickin'>Pick up location</label>
          </div>
          <div id="drop" >
          <img id='down' src="https://www.redbus.in/bushire/static/icons/LeadgenIcons/CabDP.svg" alt="" />
            <input id='pickdown'onClick={reackDown} onDoubleClick={reckIn} type="text" required="" /><label htmlFor="" id='downin'>Destination location</label>
          </div>
          <div id="date">
          <img id='dateimg' src="https://www.redbus.in/bushire/static/icons/LeadgenIcons/Calendar.svg" alt="" />
            <input id='dateup' type="text" required="" /><label htmlFor="">pickup date & time</label>
          </div>
          <div id="end">
          <input id='enddown' type="checkbox" required="" /><label htmlFor="">pickup date & time</label>
          </div>
          <div id="search">search</div>
        </div>

      </div>
      
    </div>
  )
}

export default Searchbar
