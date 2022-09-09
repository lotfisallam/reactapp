import React from 'react';
import Child  from './Child';
import { Component } from 'react';

class App extends Component {
 //arow function 
  Test=()=>{
    console.log('am i here ?');
  }
  Test2(){
    console.log('sds');
  }

  render(){
    return (
    <div className="App">
      hello react
      <Child/> 
      {this.Test()}
      {this.Test2()}
      <button>click</button>
     </div>
     );
  }
  
}

export default App;
