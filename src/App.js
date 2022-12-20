import React, { Component } from "react";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <div>
        <form>
          <FormSection
            title="Contact Information"
            titles={["Name", "Phone Number", "Email", "Address"]}
          ></FormSection>
        </form>
      </div>
    );
  }
}

// class Form extends Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//   render(){
//     return <form>FormSection</form>
//   }
// }

const Align = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

class FormSection extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);

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

  submitForm(e) {
    e.preventDefault();
    console.log(this.state);
  }

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
