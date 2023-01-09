import { Component } from "react";
import { CVSection } from "../Styles/CVSection";
import { CVEntry } from "./CVEntry";

class StructuredCVsection extends Component {
  render() {
    return (
      <CVSection>
        <h2>{this.props.title}</h2>
        {this.props.entries.map((entry, index) => (
          <CVEntry entry={entry} key={index}></CVEntry>
        ))}
      </CVSection>
    );
  }
}
//  Constructs employment and educational sections of the CV. Made up of CVEntries (either degrees or jobs)
// Constructed in App.js, using event listeners that are passed to the submission buttons on the input form

export { StructuredCVsection };
