import { Component } from "react";
import { Input } from "./Input";
import { InputEntryDiv } from "../Styles/InputEntryDiv";

class JobInput extends Component {
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
        <h4 style={{ textAlign: "center" }}>Job {this.props.number}</h4>
        <button onClick={this.deleteEntry} style={{ margin: "5px" }}>
          Delete this job
        </button>
        <Input title="Position" onChange={this.onChange}></Input>
        <Input title="Company" onChange={this.onChange}></Input>
        <Input title="Start" onChange={this.onChange}></Input>
        <Input title="End" onChange={this.onChange}></Input>
        <Input title="Description" onChange={this.onChange}></Input>
      </InputEntryDiv>
    );
  }
}
// A subcomponent of the employment information section to input the information for a specific degree

export { JobInput };
