import { Component } from "react";
import { CVEntryDiv } from "../Styles/CVEntryDiv";
import { Lower } from "../Styles/Lower";
import { MidLeft } from "../Styles/MidLeft";
import { TopLeft } from "../Styles/TopLeft";
import { MidRight } from "../Styles/MidRight";
import { TopRight } from "../Styles/TopRight";

class CVEntry extends Component {
  render() {
    return (
      <CVEntryDiv>
        {Object.entries(this.props.entry).map((item, index) => {
          // we need this  switch statement because, with the way I've packaged css in this project, the only way to get elements to position correctly is to have them instantiate a JSX HTML type that contains the appropriate styling. Would be better to do via stylesheet - may change this when I revisit the project
          switch (item[0]) {
            case "Company":
            case "School":
              return (
                <TopLeft key={index}>
                  <p>{item[1]}</p>
                </TopLeft>
              );
            case "Position":
            case "Degree":
              return (
                <MidLeft key={index}>
                  <p>{item[1]}</p>
                </MidLeft>
              );
            case "Start":
              return (
                <TopRight key={index}>
                  <p>{`${item[1]}`}</p>
                  <p>to</p>
                </TopRight>
              );
            case "End":
              return (
                <MidRight key={index}>
                  <p>{item[1]}</p>
                </MidRight>
              );
            case "Description":
              return (
                <Lower key={index}>
                  <p>{item[1]}</p>
                </Lower>
              );

            default:
              return <div key={-1}></div>;
          }
        })}
        {/* we have the map to make sure we do not include the indexing information needed for clear input, i.e. job #1, degree #1, etc - that is not a part of typical CV styling. The css here is done by way of classes rather than importing CSS components, like the rest of the application, since that would involve some very complicated conditionsl here */}
      </CVEntryDiv>
    );
  }
}
// A single entry of either a job or a degree in the CV. One or several of these, together with a title, will make up a StructuredCVSection

export { CVEntry };
