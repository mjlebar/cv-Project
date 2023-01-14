import { Component } from "react";
import { InputEntryDiv } from "../Styles/InputEntryDiv";
import { Input } from "./Input";

class StructuredInput extends Component {
  onChange = (title, value) => {
    this.props.updateParent([title], value, this.props.number);
  };
  // changes the parent (ie the containing education section) state to reflect these changes in its displayData, so it can pass that change on to the CV upon submission

  deleteEntry = (e) => {
    e.preventDefault();
    if (
      window.confirm(`Are you sure you want to delete this ${this.props.type}?`)
    ) {
      alert(`${this.props.type} deleted - submit form to update CV`);
      this.props.deleteEntry(this.props.number);
    }
  };

  render() {
    if (this.props.type === "Degree") {
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
    } else if (this.props.type === "Job") {
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
}

// A subcomponent of the educational information section to input the information for a specific degree. Similar to the JobInput field, but I'm not sure how to combine them in a way that's more readable than this

export { StructuredInput };
