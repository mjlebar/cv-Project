import React, { Component } from "react";
import { CVsection } from "./Components/CVsection";
import { GeneralSection } from "./Components/GeneralSection";
import { EmploymentSection } from "./Components/EmploymentSection";
import { StructuredCVsection } from "./Components/StructuredCVSection";
import { Splitscreen } from "./Styles/Splitscreen";
import { EducationSection } from "./Components/EducationSection";
import { GeneralCVsection } from "./Components/GeneralCVSection";
import { Align } from "./Styles/Align";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        <GeneralCVsection
          key="Contact Information Unfilled"
          title="Contact Information"
          filled={false}
          entries={{ Name: "", "Phone Number": "", Email: "", Address: "" }}
        ></GeneralCVsection>,
      ],
      titles: [],
    };
  }
  // the state consists of a list of sections and their titles - we track the titles so we can efficiently check if a title has already been added

  addGeneralCVSection = (entries, title) => {
    const newSection = (
      <GeneralCVsection
        entries={entries}
        title={title}
        key={title}
      ></GeneralCVsection>
    );
    // we construct a new section with the given information

    // if that section has already been submitted, we want to update that section with the new section
    this.setState({
      sections: this.state.sections.map((section) => {
        if (section.props.title === title) {
          return newSection;
        } else {
          return section;
        }
      }),
    });
  };

  addStructuredCVSection = (entries, title) => {
    const newSection = (
      <StructuredCVsection
        entries={entries}
        title={title}
        key={title}
      ></StructuredCVsection>
    );
    // we construct a new section with the given information

    if (this.state.titles.includes(title)) {
      // if that section has already been submitted, we want to update that section with the new section
      this.setState({
        sections: this.state.sections.map((section) => {
          if (section.props.title === title) {
            return newSection;
          } else {
            return section;
          }
        }),
      });
    } else {
      // otherwise, we add in the new section
      this.setState((state) => ({
        titles: state.titles.concat(title),
        sections: state.sections.concat(newSection),
      }));
    }
  };

  render() {
    return (
      <Splitscreen>
        <form key={0}>
          <GeneralSection
            title="Contact Information"
            titles={["Name", "Phone Number", "Email", "Address"]}
            getInfo={this.addGeneralCVSection}
          ></GeneralSection>
          <EmploymentSection
            title="Employment Information"
            getInfo={this.addStructuredCVSection}
          ></EmploymentSection>
          <EducationSection
            title="Educational Information"
            getInfo={this.addStructuredCVSection}
          ></EducationSection>
        </form>
        <div className="CV" key={1}>
          {this.state.sections}
        </div>
      </Splitscreen>
    );
  }
}

export default App;
