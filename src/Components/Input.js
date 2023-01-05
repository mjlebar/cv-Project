import { Component } from "react";
import { InputDiv } from "../Styles/InputDiv";
import format from "date-fns/format";

class Input extends Component {
  handleText = (e) => {
    const text = e.target.value;
    this.props.onChange(this.props.title, text);
  };
  //we pass an onChange function as a prop from the form section containing this input - this way whenever we edit the input, it passes the updates text to the form containing the input

  handleDate = (e) => {
    const text = e.target.value;
    const date = format(new Date(text), "LLLL yyyy");
    this.props.onChange(this.props.title, date);
  };
  //same thing, but for dates specifically

  render() {
    switch (this.props.title) {
      default:
        return (
          <InputDiv>
            <label style={{ margin: "2px" }} htmlFor={this.props.title}>
              {this.props.title}:
            </label>
            <input
              type="text"
              onChange={this.handleText}
              id={this.props.title}
            ></input>
          </InputDiv>
        );
      case "Start":
      case "End":
        return (
          <InputDiv>
            <label style={{ margin: "2px" }} htmlFor={this.props.title}>
              {this.props.title}:
            </label>
            <input
              type="date"
              onChange={this.handleDate}
              id={this.props.title}
            ></input>
          </InputDiv>
        );
    }
  }
}
// A section of the input form where we can enter a single line of input, ie job title or phone number. We have to do the switch because we want date inputs to be formatted as dates

export { Input };
