import React, {Component} from 'react';
//import {BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import User from './user-comp'


class StatefulPage extends Component {


  constructor(props) {
      super(props);
      this.state = {
         notes: "",
         tabTrack: 0,
         scores: [0,0,0,0,0,0,0],
         currentUser: 3
      };
    this.handleScoreChangeCB  = this.handleScoreChangeCB.bind(this);
    this.handleClick  = this.handleClick.bind(this);
  }


  componentDidMount() {

  }


handleClick (tab) {
     if (!tab) tab = 0
     console.log("Click on Tab: "+tab)
     this.setState ({
            tabTrack: tab,
            currentUser: tab
     })


  }


handleScoreChangeCB (change) {
       //console.log("Got score change "+change)
       let tempScores = this.state.scores
       let newScore = tempScores[this.state.currentUser]
       if(!newScore) newScore = 0
       newScore += change
       console.log("newScore is "+newScore)
       tempScores[this.state.currentUser] = newScore

       this.setState ({
                   scores: tempScores
       })


}

uncontrolledChange() {
      this.setState ({
                  notes: this.input.value
      })
} //ucc


controlledChange(text) {
      this.setState ({
                  notes: text
      })


} //cc

render()  {
    let buttons=[]

    for(let i=1;i<9;i++) {
    let buttonColor = (i===this.state.currentUser) ? "lightgrey" : "white"
    let textColor = (i===this.state.currentUser) ? "black" : "grey"

    buttons.push(<button
                    onClick={(e)=>this.handleClick(i)}
                    key={i}
                    size={'100 px'}
                    style= {{backgroundColor:buttonColor, color:textColor, width:75}}
                  >{i}</button>
                    )
     }
      return (
              <div>
                          {"THIS IS STATE: "+ JSON.stringify(this.state,null,4)}

                          <br/><br/>
                          <div>
                                {buttons}
                          </div>


                          <User
                                    id={this.state.currentUser}
                                    score={this.state.scores[this.state.currentUser]}
                                    changeFunct = {this.handleScoreChangeCB}
                           >
                           Passed to each via children: {this.state.notes}
                           </User>

                          <br/>
                          <div>
                          Uncontrolled Notes (ref):
                            <input
                                type='text'
                                //this.input gets the DOM node
                                ref={(info)=>{
                                    this.input = info
                                  }}
                                onChange = {
                                      () => {this.uncontrolledChange()}

                                   }

                            />

                          </div>
                          <div>
                           Controlled Notes ..........:
                            <input
                                  type='text'
                                  onChange = {
                                      (eventObj) => {this.controlledChange(eventObj.target.value)}

                                   }
                            />
                            </div>

                           <br/>

                           <div style={{border: '1px solid black' }}  onClick={ (e) => {this.handleClick(2)} }>
                                {(this.state.tabTrack>0) ? "Tab is  "+this.state.tabTrack : ".."   }
                           </div>


                </div>
            )


    }
}

//this is the default function when you import the component
export default StatefulPage;
