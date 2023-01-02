import { Component } from "react";
import { Align } from "../Styles/Align";

class StructuredCVsection extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.entries.map((entry, index) => (
          <Align key={index}>
            {Object.entries(entry).map((subEntry, subIndex) => (
              <div key={subIndex}>
                <p>{subEntry[0]}:</p> <p>{subEntry[1]}</p>
              </div>
            ))}
          </Align>
        ))}
      </div>
    );
  }
}
// Passed a title for the section, and array of entries, each of which contains a description (eg "Name") and a value for that description (eg "Michael")

export { StructuredCVsection };
