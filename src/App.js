import React, { Component } from "react";
import { GeneralSection } from "./Components/GeneralSection";
import { EmploymentSection } from "./Components/EmploymentSection";
import { StructuredCVsection } from "./Components/StructuredCVSection";
import { Splitscreen } from "./Styles/Splitscreen";
import { EducationSection } from "./Components/EducationSection";
import { GeneralCVsection } from "./Components/GeneralCVSection";
import { CVDiv } from "./Styles/CVDiv";
import { Form } from "./Styles/Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        <GeneralCVsection
          key="Contact Information Unfilled"
          title="Contact Information"
          filled={true}
          entries={{
            Name: "Matthew LeBar",
            "Phone Number": "7405915792",
            Email: "lebar.mj@gmail.com",
            Address: "5023 N Winchester Ave",
          }}
        ></GeneralCVsection>,
        <StructuredCVsection
          key="Employment Information"
          title="Employment Information"
          entries={[
            {
              Position: "Scholar Coach",
              Company: "Schuler Scholar Program",
              Start: "July 2019",
              End: "June 2022",
              Description: "Academic support for URM",
            },
            {
              Position: "Scholar Coach",
              Company: "Schuler Scholar Program",
              Start: "July 2019",
              End: "June 2022",
              Description: "Academic support for URM",
            },
          ]}
        ></StructuredCVsection>,
        <StructuredCVsection
          key="Educational Information"
          title="Educational Information"
          entries={[
            {
              School: "Davidson College",
              Degree: "Bachelor's of Arts",
              Start: "July 2019",
              End: "June 2022",
              Description: "",
            },
            {
              School: "Davidson College",
              Degree: "Bachelor's of Arts",
              Start: "July 2019",
              End: "June 2022",
              Description: "",
            },
          ]}
        ></StructuredCVsection>,
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
        <Form className="input-form">
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
        </Form>
        <CVDiv className="CV" key={1}>
          {this.state.sections}
        </CVDiv>
      </Splitscreen>
    );
  }
}

export default App;
