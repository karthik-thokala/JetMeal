
import React from "react";

class Mike extends React.Component{
    constructor(props){
    super(props);

 this.state= {
    count:0
 }

    }
 render(){
    const {count}= this.state;
    return (
        <div>
            <h1>HEllo  andariki !</h1> 
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>Count:{count}</button>
        </div>
   
    )
 }
}

export default Mike