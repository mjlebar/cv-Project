import { Component } from "react";

class CVEntry extends Component {
  render() {
    return (
      <div>
        {Object.entries(this.props.entry).map((subEntry, subIndex) => {
          if (subIndex !== 0) {
            return (
              <div className={subEntry[0]} key={subIndex}>
                <p>{subEntry[1]}</p>
              </div>
            );
          }
        })}
        {/* we have the map to make sure we do not include the indexing information needed for clear input, i.e. job #1, degree #1, etc - that is not a part of typical CV styling. The css here is done by way of classes rather than importing CSS components, like the rest of the application, since that would involve some very complicated conditionsl here */}
      </div>
    );
  }
}
// A single entry of either a job or a degree in the CV. One or several of these, together with a title, will make up a StructuredCVSection

export { CVEntry };
