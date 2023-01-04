import { Component } from "react";
import { Align } from "../Styles/FormSectionDiv";

class GeneralCVsection extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.entries.Name}</h1>
        <div>
          <p>{this.props.entries["Phone Number"]}</p>
        </div>
        <div>
          <p>{this.props.entries.Email}</p>
        </div>
        <div>
          <p>{this.props.entries.Address}</p>
        </div>
      </div>
    );
  }
}
// Passed a title for the section, and array of entries, each of which contains a description (eg "Name") and a value for that description (eg "Michael")

export { GeneralCVsection };
