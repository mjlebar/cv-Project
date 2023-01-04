import { Component } from "react";
import { Input } from "./Input";

class JobInput extends Component {
  onChange = (title, value) => {
    this.props.onChange([title], value, this.props.number);
  };
  render() {
    return (
      <div>
        <h4 style={{ textAlign: "center" }}>Job {this.props.number}</h4>
        <Input title="Position" onChange={this.onChange}></Input>
        <Input title="Company" onChange={this.onChange}></Input>
        <Input title="Start" onChange={this.onChange}></Input>
        <Input title="End" onChange={this.onChange}></Input>
        <Input title="Description" onChange={this.onChange}></Input>
      </div>
    );
  }
}
// A subcomponent of the employment information section to input the information for a specific degree

export { JobInput };
