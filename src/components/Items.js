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

 // in line 8 we did key buz it will give me consel erorr so , the key should be uniq or use math.Randoem() it give me random num from 0 to 1 if i wanna mmake to 10 just mulitplait with 10    
export default Items;