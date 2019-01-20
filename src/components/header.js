import React, {} from "react";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";


const Header = () => (
  <header className="header">
        <div className="center_container">
                <h1  className="header__title">React Project Starter Kit</h1>
                <h2 className="header__subtitle">v.8 </h2>

                 <br/>
                    <Link to="/" className="head-links"> Home </Link>
        </div>
  </header>

)

export default Header;
