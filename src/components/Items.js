import React from "react";
import { Component } from "react";
class Items extends Component {
    render(){
        const itemop =this.props.item;
        const theitem = itemop.map((item) => {
        return(
            <div key={item.id}>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.age}</p>
            </div>
            )
            })
         return(
         <div>
          {theitem}
         </div>
       )
    }
}

    
export default Items;