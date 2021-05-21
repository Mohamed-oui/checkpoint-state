import React, { Component } from "react";

export class counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.increment();
    }, 1000);
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>{this.state.count}</h1>
      </div>
    );
  }
}

export default counter;
