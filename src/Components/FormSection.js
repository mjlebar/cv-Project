import { Component } from "react";
import { Input } from "./Input";
import { JobInput } from "./JobInput";
import { Align } from "../Styles/Align";
import { JobAdd } from "./JobAdd";

class FormSection extends Component {
  constructor(props) {
    super(props);

    if (this.props.title === "Employment Information") {
      this.state = {
        inputs: [
          <JobInput key={0} onChange={this.handleFieldChange}></JobInput>,
          <JobAdd key={`JobAdd`} newJob={this.newJob}></JobAdd>,
        ],
      };
    } else {
      this.state = {
        inputs: this.props.titles.map((title, index) => {
          return (
            <Input
              key={index}
              title={title}
              onChange={this.handleFieldChange}
            ></Input>
          );
        }),
      };
    }
  }
  //   passed a list of fields and their title, constructs a form out of them

  newJob = (e) => {
    e.preventDefault();
    const newJob = <JobInput key={this.state.inputs.length - 1}></JobInput>;
    this.setState((state) => ({
      inputs: state.inputs.splice(state.inputs.length, 0, newJob),
    }));
  };

  handleFieldChange = (title, value) => {
    this.setState((state) => ({
      displayData: {
        ...state.displayData,
        [title]: value,
      },
    }));
  };
  // updating a field is recorded in the state of the form section - we pass this to the children input fields as "onChange"

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state.inputs);
    this.props.getInfo(
      Object.entries(this.state.displayData),
      this.props.title
    );
  };
  //we pass the form a "getInfo" function from the app, and when the form is submitted it passes the app the information about what has been inputted into the form

  render() {
    return (
      <Align>
        <h3>{this.props.title}</h3>
        {this.state.inputs}
        <button className="submit-btn" onClick={this.submitForm}>
          Submit
        </button>
      </Align>
    );
  }
}

export { FormSection };
