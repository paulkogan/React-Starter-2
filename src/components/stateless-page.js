import React, {} from "react";
//import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

var tabNum = 0

function handleClick (tab) {

   console.log("Click on Tab: "+tab)
   tabNum = tab
   console.log("tabNum is : "+tabNum)

}

const StatelessPage = () => (
  <div>
              <div onClick={ (e) => {handleClick(1)} }>
                    Tab 1
               </div>
               <div onClick={ (e) => {handleClick(2)} }>
                   Tab 2
              </div>
            <div onClick={()=>{console.log("This is three")}}>
                  Tab 3
             </div>
             <div >
                   The tab clicked was {tabNum}
              </div>
    </div>
)

//this is the default function when you insert the page
export default StatelessPage;
