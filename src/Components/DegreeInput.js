import { Component } from "react";
import { InputEntryDiv } from "../Styles/InputEntryDiv";
import { Input } from "./Input";

class DegreeInput extends Component {
  onChange = (title, value) => {
    this.props.onChange([title], value, this.props.number);
  };

  deleteEntry = (e) => {
    e.preventDefault();
    this.props.deleteEntry(this.props.number);
  };

  render() {
    return (
      <InputEntryDiv>
        <h4 style={{ textAlign: "center" }}>Degree {this.props.number}</h4>
        <button onClick={this.deleteEntry} style={{ margin: "5px" }}>
          Delete this degree
        </button>
        <Input title="School" onChange={this.onChange}></Input>
        <Input title="Degree" onChange={this.onChange}></Input>
        <Input title="Start" onChange={this.onChange}></Input>
        <Input title="End" onChange={this.onChange}></Input>
        <Input title="Description" onChange={this.onChange}></Input>
      </InputEntryDiv>
    );
  }
}

// A subcomponent of the educational information section to input the information for a specific degree

export { DegreeInput };
