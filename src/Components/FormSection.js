import { Component } from "react";
import { FormSectionDiv } from "../Styles/FormSectionDiv";

class FormSection extends Component {
  submitForm = (e) => {
    e.preventDefault();
    this.props.displayData(this.state.displayData, this.props.title);
  };
  //we pass the form a "displayData" function from the app, and when the form is submitted it passes the app the information about what has been inputted into the form. All form sections (contact, educational, employment) have this, so we implement it in what's essentially an interface or an abstract class

  render() {
    return (
      <FormSectionDiv>
        <h3 style={{ textAlign: "center" }}>{this.props.title}</h3>
        {this.state.inputs}
        <button className="submit-btn" onClick={this.submitForm}>
          Submit
        </button>
      </FormSectionDiv>
    );
  }
  // similarly, they all consist of a title, some inputs, and a submit button... the variation comes into play with what the inputs are, so the more specific classes extending FormSection contain specific intializations for state.inputs
}

export { FormSection };
