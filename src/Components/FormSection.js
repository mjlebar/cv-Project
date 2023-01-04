import { Component } from "react";
import { FormSectionDiv } from "../Styles/FormSectionDiv";

class FormSection extends Component {
  submitForm = (e) => {
    e.preventDefault();
    // console.log(this.state.inputs);
    this.props.getInfo(this.state.displayData, this.props.title);
  };
  //we pass the form a "getInfo" function from the app, and when the form is submitted it passes the app the information about what has been inputted into the form

  render() {
    return (
      <FormSectionDiv>
        <h3>{this.props.title}</h3>
        {this.state.inputs}
        <button className="submit-btn" onClick={this.submitForm}>
          Submit
        </button>
      </FormSectionDiv>
    );
  }
}

export { FormSection };
