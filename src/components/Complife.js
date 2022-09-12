import React from "react";
import { Component } from "react";

class Complife extends Component{
    constructor(){
      super()  
      console.log("i am in the constrctur i run first ")
    }
    componentDidMount(){
        console.log(" i am did mount function")
        //it run when the app load the did mount fucntion run 
    }
    componentDidUpdate(prevProps,prevState){
        console.log("i am did update function",prevProps,prevState);
        // it run when the app change or any update
    }
    
   //constructer run first and render secand 
    state={
      users:[
        { id:1, name:"lotfi", count:1},
        { id:2, name:"saleem", count:2},
        { id:3, name:"alaa", count:3}
      ]
    }
     handeladd=(e)=>{
        let items = this.state.users
        items.push({id:4,name:'ahmad',count:4});
        this.setState({
            users:items
        })

       }
      handeldelete=(e)=>{
        this.setState({
            users:[
                { id:4, name:"ahmad", count:4}
            ]
        })
      }

    render(){
        console.log("i am in the render")
       
        return(
            <div>
             component lifecycly
             
             <div>
             <button onClick={this.handeladd}>add </button>
             <button onClick={this.handeldelete} >delete</button>
             </div>
            </div>
        )
    }

}
export default Complife;