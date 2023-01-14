import React, { Component } from "react";
import { ContactSection } from "./Components/ContactSection";
import { StructuredCVsection } from "./Components/StructuredCVSection";
import { Splitscreen } from "./Styles/Splitscreen";
import { StructuredSection } from "./Components/StructuredSection";
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
          filled={false}
          entries={{
            Name: "",
            "Phone Number": "",
            Email: "",
            Address: "",
          }}
        ></ContactCVsection>,
      ],
      // this contains the list of sections in the CV ouptut - this can be loaded up with presets or left empty for the user to fill in
      titles: [],
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
  // this function is passed as an event listener to the submit function on the contact information section of the input form

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

  // this function is passed as an event listener to the submit function on the employment and education sections of the input form

  swapSections = () => {
    const section0 = this.state.sections[0];
    const section1 = this.state.sections[1];
    const section2 = this.state.sections[2];

    this.setState({
      sections: [section0, section2, section1],
    });
  };
  // this swaps the education and employment information sections

  render() {
    return (
      <Splitscreen>
        <Form key={"input-form"}>
          <p style={{ fontWeight: 700, textAlign: "center" }}>
            You may need to scroll to see new jobs or degrees you add, or to see
            all parts of the input form!
          </p>
          <form key={0}>
            <ContactSection
              title="Contact Information"
              titles={["Name", "Phone Number", "Email", "Address"]}
              sendToCV={this.addContactCVSection}
            ></ContactSection>
            <StructuredSection
              title="Employment Information"
              sendToCV={this.addStructuredCVSection}
            ></StructuredSection>
            <StructuredSection
              title="Educational Information"
              sendToCV={this.addStructuredCVSection}
            ></StructuredSection>
          </form>
        </Form>
        <CVDiv key={"CV"}>{this.state.sections}</CVDiv>
        <Swap onClick={this.swapSections}>
          Swap education and employment section order
        </Swap>
      </Splitscreen>
    );
  }
}

export default App;
