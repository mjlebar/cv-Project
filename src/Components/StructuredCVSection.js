import { Component } from "react";
import { CVEntry } from "./CVEntry";

class StructuredCVsection extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.entries.map((entry, index) => (
          <CVEntry entry={entry} key={index}></CVEntry>
        ))}
      </div>
    );
  }
}
//  Constructs employment and educational sections of the CV. Made up of CVEntries (either degrees or jobs)

export { StructuredCVsection };
