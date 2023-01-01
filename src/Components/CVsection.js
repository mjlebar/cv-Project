import { Component } from "react";
import { Align } from "../Styles/Align";

class CVsection extends Component {
  render() {
    return (
      <Align>
        <h3>{this.props.title}</h3>
        {Object.entries(this.props.entries).map((entry, index) => (
          <div key={index}>
            <p>{entry[0]}:</p> <p>{entry[1]}</p>
          </div>
        ))}
      </Align>
    );
  }
}
// Passed a title for the section, and array of entries, each of which contains a description (eg "Name") and a value for that description (eg "Michael")

export { CVsection };
