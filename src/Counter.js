import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increase = () => {
    this.setState((state) => ({ count: this.state.count + 1 }));
  };
  render() {
    return (
      <div>
        <p>You clicked {(this, this.state.count)}</p>
        <button onClick={this.increase}>Click Here</button>
      </div>
    );
  }
}
