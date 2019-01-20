import React, {} from "react";
import ReactDOM, {} from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header, {} from "./header"
import HomePage, {} from "./home-page.js"
import TransSearchPage, {} from "./trans-search-page"
import NewTransactionForm, {} from "./new-transaction-form"
import SimplePage, {} from "./stateless-page"
import StatefulPage, {} from "./statefull-page"

const notFoundPage = () => {
      return (
        <div>
                 404 -- Sorry, no such page!
                 <br />
        </div>

      );
}


const AppRouter = () => (
  <BrowserRouter>
    <div>
          <Header />
          <div className="center_container">
          <br/>
          <Switch>

              <Route path = "/" component = {HomePage} exact={true}/>
              <Route path = "/transactions" component = {TransSearchPage} />
              <Route path = "/newtrans" component = {NewTransactionForm} />
              <Route path = "/simplepage" component = {SimplePage} />
              <Route path = "/multiuser" component = {StatefulPage} />
              <Route component = {notFoundPage} />
          </Switch>
          </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;


    //              <Route path = "/dealdetails/:id" component = {DealDetailsPage} />
