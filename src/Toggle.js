import React from "react";

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state  = { isToggleOn: true};
        //this.handleClick = this.handleClick.bind(this)
    }
    handleClick=(value,e) =>{
        //e.preventDefault();
        //alert('link clicked');
        console.log(value);
        this.setState(state=>{
            return{isToggleOn: state.isToggleOn?false:true};
        })
    }
    render(){
        return (<div><button
     onClick={(e)=>this.handleClick('some value',e)}>
             {this.state.isToggleOn?'ON':'OFF'}</button>
             
             </div>
    
    );

    }
    
}
export default Toggle;