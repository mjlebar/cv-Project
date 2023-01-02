import { Component } from "react";
import { Input } from "./Input";
import { Align } from "../Styles/Align";

class DegreeInput extends Component {
  onChange = (title, value) => {
    this.props.onChange([title], value, this.props.number);
  };
  render() {
    return (
      <Align>
        <h4>Degree {this.props.number}</h4>
        <Input title="School" onChange={this.onChange}></Input>
        <Input title="Degree" onChange={this.onChange}></Input>
        <Input title="Start" onChange={this.onChange}></Input>
        <Input title="End" onChange={this.onChange}></Input>
        <Input title="Description" onChange={this.onChange}></Input>
      </Align>
    );
  }
}

export { DegreeInput };
