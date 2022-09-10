import React, {Component} from "react";

class Setstate extends Component{
    state={
        name:"ahmad",
        age:25,
        count:0
    }
    change=()=>{
      console.log(this.state)
      this.state.count=this.state.count +1;
      this.setState({
        name:"lotfi",
        age:20,
      })
    }
    render(){
        return(
             <div>

             <button onClick={this.change}>change</button>
             <p>{this.state.name}</p>
             <p>{this.state.age}</p>
             <p>{this.state.count}</p>
             </div>
        );
    }
}
export default Setstate;