import React, { Component } from "react";
import { CVsection } from "./Components/CVsection";
import { GeneralSection } from "./Components/GeneralSection";
import { EmploymentSection } from "./Components/EmploymentSection";
import { StructuredCVsection } from "./Components/StructuredCVSection";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [],
      titles: [],
    };
  }
  // the state consists of a list of sections and their titles - we track the titles so we can efficiently check if a title has already been added

  addCVSection = (entries, title) => {
    const newSection = (
      <CVsection entries={entries} title={title} key={title}></CVsection>
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
      <div>
        <form key={0}>
          <GeneralSection
            title="Contact Information"
            titles={["Name", "Phone Number", "Email", "Address"]}
            getInfo={this.addCVSection}
          ></GeneralSection>
          <EmploymentSection
            title="Employment Information"
            getInfo={this.addStructuredCVSection}
          ></EmploymentSection>
        </form>
        <div className="CV" key={1}>
          {this.state.sections}
        </div>
      </div>
    );
  }
}

export default App;
