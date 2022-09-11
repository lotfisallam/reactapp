import React from 'react';
import Child  from './Child';
import { Component } from 'react';
import Setstate from './Setstate';
import Items from './components/Items';
import Form from './components/Form';

class App extends Component {
 //arow function 
  Test=()=>{
    console.log('am i here ?');
  }
  Test2(){
    console.log('sds');
  }
  state={
    double:"double click",
    move:"moved"

  }

  handelclikc(){
    console.log('clicked')
  }
  //handelclick is a normal function i called it in the button
  handelmuose=()=>{
    console.log(this.state.move)
  }
  //handelmouse is a function that take a state from its component so i should use arrow function to let the function take state from the component
  handeldoubleclikc(){
    console.log(this.state.double)
  }
  //if i wanna take a state witout arrow function useing , i should use bind(this) it talls the function that the state in this comp   
    state={
    items : [
      {id:1, name:"lotfi" ,age:24},
      {id:2, name:"ahmad" ,age:20},
      {id:3, name:"abod" ,age:23}
       ]
      } 
  render(){
    return (
    <div className="App">
      hello react
      <Items item={this.state.items}/><br/>
      -------------------------------
      <Child/> <br/>
      -------------------------------
      {this.Test()}<br/>
      -------------------------------
      {this.Test2()}<br/>
      -------------------------------
      <button onClick={this.handelclikc}>click</button><br/>
      -------------------------------
      <button onMouseMove={this.handelmuose}>move</button><br/>
      -------------------------------
      <button onDoubleClick={this.handeldoubleclikc.bind(this)}> double click</button><br/>
      -------------------------------
      <Setstate/><br/>
      --------------------------------
      <Form/><br/>
     </div>
     );
  }
  
}

export default App;
