import { Component } from "react";
import { Align } from "../Styles/Align";

class GeneralCVsection extends Component {
  render() {
    return (
      <Align>
        <h2>{this.props.entries.Name}</h2>
        <div>
          <p>{this.props.entries["Phone Number"]}</p>
        </div>
        <div>
          <p>{this.props.entries.Email}</p>
        </div>
        <div>
          <p>{this.props.entries.Address}</p>
        </div>
      </Align>
    );
  }
}
// Passed a title for the section, and array of entries, each of which contains a description (eg "Name") and a value for that description (eg "Michael")

export { GeneralCVsection };
