import React, {Component} from 'react';
//import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import UserFetch from './user-fetch'





class UserComp extends Component {


  constructor(props) {
      super(props);
      this.state = {

      };

  }



render()  {
      return (
              <div style={{background: 'lightgrey', padding: '20px'}} >

              {/* REACT Callback pattern */}
                            <UserFetch userid= {this.props.id}>
                                  { (user) => user.photo ?
                                      <div>
                                            <img src={user.photo} height='150'/>
                                            <div>{user.firstname+" "+user.lastname}</div>
                                      </div> :
                                      <div>
                                            <img src='https://raw.githubusercontent.com/wilsonvargas/ButtonCirclePlugin/master/images/icon/icon.png' width='150'/>
                                            <div>{user.firstname+" "+user.lastname}</div>
                                       </div>
                                  }
                            </UserFetch>
                          <br/>
                           <div >
                                Props ID: {this.props.id}
                           </div>
                           <div >
                               Props Score: {this.props.score}
                           </div>

                           <div >
                                 <button onClick={() => this.props.changeFunct(1)}>+</button>
                                 <button onClick={() => this.props.changeFunct(-1)}>-</button>
                           </div>
                           <div >
                                  {this.props.children}
                           </div>
                            <br/>





                </div>
            )


    }
}

//this is the default function when you import the component
export default UserComp ;


  //  <div style ={{display:'inline-block', float:'left' }}>
