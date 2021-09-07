import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount(){
        this.timerId = setInterval(()=>{
            this.setState({date: new Date()});
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    render(){
        return <h1> Time Left in Explosion{this.state.date.toLocaleString()}</h1>;
    }
}
// function Clock(props){
// return <h1>{props.date.toLocaleString()}</h1>;
// }

export default Clock;