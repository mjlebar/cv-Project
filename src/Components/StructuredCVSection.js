import { Component } from "react";
import { JobEntry } from "./JobEntry";
import { DegreeEntry } from "./DegreeEntry";

class StructuredCVsection extends Component {
  render() {
    if (this.props.title === "Educational Information") {
      return (
        <div>
          <h2>{this.props.title}</h2>
          {this.props.entries.map((entry, index) => (
            <DegreeEntry entry={entry} key={index}></DegreeEntry>
          ))}
        </div>
      );
    } else if (this.props.title === "Employment Information") {
      return (
        <div>
          <h2>{this.props.title}</h2>
          {this.props.entries.map((entry, index) => (
            <JobEntry entry={entry} key={index}></JobEntry>
          ))}
        </div>
      );
    }
  }
}
// Passed a title for the section, and array of entries, each of which contains a description (eg "Name") and a value for that description (eg "Michael")

export { StructuredCVsection };
