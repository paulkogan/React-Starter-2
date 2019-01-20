import React, {Component} from 'react';
//import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import {formatCurrency, getAPI_endpoint} from './ira-utils';
const apiHost = getAPI_endpoint()


class UserFetch extends Component {


  constructor(props) {
      super(props);
      this.state = {
          userid:null,
          user:{}
      };

  }


componentDidMount() {

          this.setState ({
                 userid:this.props.userid
          })


        const fetchURL_user = apiHost + "/api/getuserdetails/"+this.props.userid;
        console.log("Fetching for "+this.props.userid)
        fetch(fetchURL_user)
         .then(results => results.json())
         .then(data =>  {
                this.setState({ user: data})
                //console.log(JSON.stringify(data))
          })

}


componentDidUpdate(prevProps) {
    if (this.props.userid !== prevProps.userid) {
      console.log("Props have changed in Fetch")
      this.componentDidMount()
    }
  }




//render just returns the function that got passed with children
render()  {

      return this.props.children(this.state.user)


}


} //component


export default UserFetch ;


  //  <div style ={{display:'inline-block', float:'left' }}>
