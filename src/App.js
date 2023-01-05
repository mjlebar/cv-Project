import React, { Component } from "react";
import { ContactSection } from "./Components/ContactSection";
import { EmploymentSection } from "./Components/EmploymentSection";
import { StructuredCVsection } from "./Components/StructuredCVSection";
import { Splitscreen } from "./Styles/Splitscreen";
import { EducationSection } from "./Components/EducationSection";
import { ContactCVsection } from "./Components/ContactCVSection";
import { CVDiv } from "./Styles/CVDiv";
import { Form } from "./Styles/Form";
import { Swap } from "./Styles/Swap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        <ContactCVsection
          key="Contact Information Unfilled"
          title="Contact Information"
          filled={true}
          entries={{
            Name: "Matthew LeBar",
            "Phone Number": "7405915792",
            Email: "lebar.mj@gmail.com",
            Address: "5023 N Winchester Ave",
          }}
        ></ContactCVsection>,
        <StructuredCVsection
          key="Employment Information"
          title="Employment Information"
          entries={[
            {
              Position: "Scholar Coach",
              Company: "Schuler Scholar Program",
              Start: "July 2019",
              End: "June 2022",
              Description:
                "I have taken a class covering Data Structures and Algorithms in Java, reviewed the fundamentals of Java, and plan to build my own projects in Java. I have also been practicing SQL and making sure I understand how it works. While I do not have work experience as a software engineer, I believe that my background in math gives me the tools I need to excel as a developer.",
            },
            {
              Position: "Scholar Coach",
              Company: "Schuler Scholar Program",
              Start: "July 2019",
              End: "June 2022",
              Description:
                "I have taken a class covering Data Structures and Algorithms in Java, reviewed the fundamentals of Java, and plan to build my own projects in Java. I have also been practicing SQL and making sure I understand how it works. While I do not have work experience as a software engineer, I believe that my background in math gives me the tools I need to excel as a developer.",
            },
          ]}
        ></StructuredCVsection>,
        <StructuredCVsection
          key="Educational Information"
          title="Educational Information"
          entries={[
            {
              School: "Davidson College",
              Degree: "Bachelor's of Arts in Mathematics and Philosophy",
              Start: "July 2019",
              End: "June 2022",
              Description:
                "Magna Cum Laude, 3.9 GPA, High Honors in Philosophy",
            },
          ]}
        ></StructuredCVsection>,
      ],
      // this contains the list of sections in the CV ouptut - this can be loaded up with presets or left empty for the user to fill in
      titles: ["Employment Information", "Educational Information"],
    };
  }
  // the state consists of a list of sections and their titles - we track the titles so we can efficiently check if a title has already been added

  addContactCVSection = (entries, title) => {
    const newSection = (
      <ContactCVsection
        entries={entries}
        title={title}
        key={title}
      ></ContactCVsection>
    );
    // we construct a new section with the given information. We don't check the title since we have set up the application to start with this section. We do this since CVs always start with the contact information, which is what this section contains

    this.setState({
      sections: this.state.sections.map((section) => {
        if (section.props.title === title) {
          return newSection;
        } else {
          return section;
        }
      }),
    });
    // this updates the section with whatever has been submitted
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
      // if that section has already been submitted, we want to update that section with the new section. We check title here since we do not need to initialize the page with education and employment info, and it doesn't matter what order they're submitted in
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

  swapSections = () => {
    const section0 = this.state.sections[0];
    const section1 = this.state.sections[1];
    const section2 = this.state.sections[2];

    this.setState({
      sections: [section0, section2, section1],
    });
  };

  render() {
    return (
      <Splitscreen>
        <Form className="input-form">
          <p style={{ fontWeight: 700, textAlign: "center" }}>
            You may need to scroll to see new jobs or degrees you add, or to see
            all parts of the input form!
          </p>
          <form key={0}>
            <ContactSection
              title="Contact Information"
              titles={["Name", "Phone Number", "Email", "Address"]}
              getInfo={this.addContactCVSection}
            ></ContactSection>
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
        <Swap onClick={this.swapSections}>
          Swap education and employment section order
        </Swap>
      </Splitscreen>
    );
  }
}

export default App;
