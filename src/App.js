import React, { Component } from "react";
import styled from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [],
    };
  }

  addCVSection = (entries, title) => {
    this.setState({
      sections: this.state.sections.concat(
        <div key={title}>
          <h3>{title}</h3>
          {entries.map((entry, index) => (
            <div key={index}>
              <p>{entry.title}:</p> <p>{entry.value}</p>
            </div>
          ))}
        </div>
      ),
    });
  };

  render() {
    return (
      <div>
        <form key={0}>
          <FormSection
            title="Contact Information"
            titles={["Name", "Phone Number", "Email", "Address"]}
            getInfo={this.addCVSection}
          ></FormSection>
        </form>
        <div className="CV" key={1}>
          {this.state.sections}
        </div>
      </div>
    );
  }
}

const Align = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

class FormSection extends Component {
  constructor(props) {
    super(props);

    this.children = this.props.titles.map((title, index) => (
      <Input
        key={index}
        title={title}
        onChange={this.handleFieldChange}
      ></Input>
    ));
  }

  handleFieldChange = (title, value) => {
    this.setState({
      [title]: value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    // const entries = [];
    this.props.getInfo(
      [{ title: "Name", value: "Dave" }],
      "Contact Information"
    );
  };

  render() {
    return (
      <Align>
        <h3>{this.props.title}</h3>
        {this.children}
        <button className="submit-btn" onClick={this.submitForm}>
          Submit
        </button>
      </Align>
    );
  }
}

class Input extends Component {
  handleText = (e) => {
    const text = e.target.value;
    this.props.onChange(this.props.title, text);
  };

  render() {
    return (
      <div>
        <label style={{ margin: "10px" }} htmlFor={this.props.title}>
          {this.props.title}:
        </label>
        <input
          type="text"
          onChange={this.handleText}
          id={this.props.title}
        ></input>
      </div>
    );
  }
}

// class CVSection extends Component {
//   constructor(props) {
//     super(props);

//     this.children = this.props.entries.map((entry, index) => (
//       <div key={index}>
//         <p>{entry.title}:</p> <p>{entry.value}</p>
//       </div>
//     ));
//   }
//   render() {
//     return <div>{this.children}</div>;
//   }
// }

export default App;
