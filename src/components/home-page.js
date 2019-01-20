import React, {} from "react";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";



const HomePage = () => (
        <div>
            <NavLink to="/transactions" className="head-links" activeClassName="is-active"> Search Page</NavLink>
              <br />
            <NavLink to="/newtrans" className="head-links" activeClassName="is-active"> Entry Form</NavLink>
                    <br />
            <NavLink to="/multiuser" className="head-links" activeClassName="is-active"> MultiUser Component</NavLink>
                                            <br />


             <br />
       </div>
)

export default HomePage;
