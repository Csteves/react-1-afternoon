import React, { Component } from 'react';

export default class Sum extends Component {
    constructor(){
      super();
      this.state = {
        number1: 0,
        number2: 0,
        sum: null
      }
    }
   onChange1(value){
     this.setState({number1:value})
   }
   onChange2(value){
    this.setState({number2:value})
  }

    adder(num1,num2){
      let sum = parseInt(num1,10)+ parseInt(num2,10);
      this.setState({sum:sum})
  }
    render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input type="text" className="inputLine" onChange={(e)=> this.onChange1(e.target.value)}/>
        <input type="text" className="inputLine" onChange={(e)=>this.onChange2(e.target.value)}/>
        <button className="confirmationButton" onClick={()=>this.adder(this.state.number1,this.state.number2)}>ADD</button>
        <span className="resultsBox">{this.state.sum}</span>
      </div>
    )
  }
}