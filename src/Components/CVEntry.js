import { Align } from "../Styles/FormSectionDiv";
import { Component } from "react";

class CVEntry extends Component {
  render() {
    return (
      <div>
        {Object.entries(this.props.entry).map((subEntry, subIndex) => (
          <div key={subIndex}>
            <p>{subEntry[0]}:</p> <p>{subEntry[1]}</p>
          </div>
        ))}
      </div>
    );
  }
}

export { CVEntry };
