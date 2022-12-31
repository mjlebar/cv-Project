import { Component } from "react";
import { Input } from "./Input";
import { Align } from "../Styles/Align";

class JobInput extends Component {
  render() {
    return (
      <Align>
        <Input title="Position" onChange={this.props.onChange}></Input>
        <Input title="Company" onChange={this.props.onChange}></Input>
        <Input title="Start" onChange={this.props.onChange}></Input>
        <Input title="End" onChange={this.props.onChange}></Input>
        <Input title="Description" onChange={this.props.onChange}></Input>
      </Align>
    );
  }
}

export { JobInput };
