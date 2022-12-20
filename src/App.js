import React, { Component } from "react";
import styled from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [],
      titles: [],
    };
  }

  addCVSection = (entries, title) => {
    if (this.state.titles.includes(title)) {
      return;
    }
    this.setState((state) => ({
      titles: state.titles.concat(title),
      sections: state.sections.concat(
        <div key={title}>
          <h3>{title}</h3>
          {entries.map((entry, index) => (
            <div key={index}>
              <p>{entry[0]}:</p> <p>{entry[1]}</p>
            </div>
          ))}
        </div>
      ),
    }));
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
    this.props.getInfo(Object.entries(this.state), this.props.title);
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

export default App;
