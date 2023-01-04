import { Component } from "react";
import { Input } from "./Input";
import { Align } from "../Styles/FormSectionDiv";

class DegreeInput extends Component {
  onChange = (title, value) => {
    this.props.onChange([title], value, this.props.number);
  };
  render() {
    return (
      <div>
        <h4 style={{ textAlign: "center" }}>Degree {this.props.number}</h4>
        <Input title="School" onChange={this.onChange}></Input>
        <Input title="Degree" onChange={this.onChange}></Input>
        <Input title="Start" onChange={this.onChange}></Input>
        <Input title="End" onChange={this.onChange}></Input>
        <Input title="Description" onChange={this.onChange}></Input>
      </div>
    );
  }
}

export { DegreeInput };
