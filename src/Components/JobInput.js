import { Component } from "react";
import { Input } from "./Input";
import { InputEntryDiv } from "../Styles/InputEntryDiv";

class JobInput extends Component {
  onChange = (title, value) => {
    this.props.updateParent([title], value, this.props.number);
  };

  deleteEntry = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this job?")) {
      alert("Job deleted - submit form to update CV");
      this.props.deleteEntry(this.props.number);
    }
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
// A subcomponent of the employment information section to input the information for a specific degree. Similar to the DegreeInput field, but I'm not sure how to combine them in a way that's more readable than this

export { JobInput };
