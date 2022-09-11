import React,  {Component} from "react";

class Form extends Component{
    state={
        name:''
    }

    handelchange=(e)=>{
         console.log(e.target.value)
         this.setState({
            name:e.target.value

        })
    }
    handelsub=(e)=>{
        e.preventDefault()
        console.log(this.state.name)
    }
    render(){
        return(
          <div>
            Form test
            <form onSubmit={this.handelsub}>
                <input type="txst" onChange={this.handelchange}/>
                <select onChange={this.handelchange}>
                    <option value='lotfi'>lotfi</option>
                    <option value='sallam'>sallam</option>
                </select>
                <textarea onChange={this.handelchange}/>
                <button>submit</button>
                {this.state.name}
            </form>
          </div>

        );
    }
}
export default Form;