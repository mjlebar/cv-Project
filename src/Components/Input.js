import { Component } from "react";

class Input extends Component {
  handleText = (e) => {
    const text = e.target.value;
    this.props.onChange(this.props.title, text);
  };
  //we pass an onChange function as a prop from the form section containing this input - this way whenever we edit the input, it passes the updates text to the form containing the input

  render() {
    return (
      <div>
        <label style={{ margin: "10px" }} htmlFor={this.props.title}>
          {this.props.title}:
        </label>
        <input
          type="text"
          onChange={this.handleText}
          id={this.props.title}
        ></input>
      </div>
    );
  }
}
// A section of the form where we can enter some input

export { Input };
