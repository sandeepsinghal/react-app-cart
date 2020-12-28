import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200", // random 200x200 picture
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? <h1>Zero</h1> : <h1>Non Zero</h1>;
  }
}

export default Counter;
