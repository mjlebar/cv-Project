import { EntryAdd } from "./EntryAdd";
import { FormSection } from "./FormSection";
import { Component } from "react";
import { StructuredInput } from "./StructuredInput";

class StructuredSection extends Component {
  constructor(props) {
    super(props);

    if (this.props.title === "Educational Information") {
      this.type = "Degree";
    } else if (this.props.title === "Employment Information") {
      this.type = "Job";
    }

    this.state = {
      inputs: [
        <EntryAdd
          type={`${this.type}`}
          add={true}
          key={`${this.type}Add`}
          newEntry={this.newEntry}
        ></EntryAdd>,
        <StructuredInput
          type={this.type}
          key={0}
          number={1}
          deleteEntry={this.deleteEntry}
          updateParent={this.onChange}
        ></StructuredInput>,
      ],
      displayData: [{ number: 1 }],
    };
  }
  // displayData basically creates an object to be updated when we enter input in the DegreeInput fields. The onChange function constructed in StructuredSection manages this - what happens when we change an individual entry in a structured section - say, a specific degree - is that whatever data we change (eg "School: Davidson College") will be passed into the entry in DisplayData with the number corresponding to the section we've changed. So that's why we're updating displayData every time we add or remove an entry but not really putting much into the entries in displayData - the onChange function does that for us. The if-then statement in the beginnng tells us whether we're dealing with employment or education, and this information will be passed to each entry so that we use the correct type of input

  onChange = (item, value, index) => {
    this.setState((state) => ({
      displayData: state.displayData.map((entry) => {
        if (entry.number === index) {
          entry[item] = value;
          return entry;
        } else {
          return entry;
        }
      }),
    }));
  };
  // makes sure state is updated as needed

  deleteEntry = (indexToDelete) => {
    let diff = 0;
    // this tracks how much we need to update the number of each entry we're going through... once we go through the input to remove, we change this to -1 so that forthcoming entries are dropped down a number
    this.setState((state) => ({
      inputs: state.inputs
        .map((entry, index) => {
          if (entry.props.number === indexToDelete) {
            diff--;
            return null;
          } else if (entry.props.add) {
            return entry;
          } else {
            return (
              <StructuredInput
                type={this.type}
                key={index - 1 + diff}
                number={entry.props.number + diff}
                deleteEntry={this.deleteEntry}
                updateParent={this.onChange}
              ></StructuredInput>
            );
          }
        })
        .filter((entry) => entry !== null),
      displayData: state.displayData.slice(0, -1),
    }));
  };
  // We need to make sure that entry numbers (ie entry 1, entry 2, etc) update appropriately when we delete an entry. To do this, we not only need to remove the appropriate entry from the array but update each of the entries after it. That's what this array.map then .filter is doing. I know there are other ways to do this (eg array.reduce) but seems the cleanest to me. The display data slice just knocks off an entry. Since all the entries are renumbered, when we submit they'll fill out displayData correctly

  newEntry = (e) => {
    e.preventDefault();
    const entryNum = this.state.inputs.length;
    const newEntry = (
      <StructuredInput
        type={this.type}
        key={entryNum - 1}
        number={entryNum}
        updateParent={this.onChange}
        deleteEntry={this.deleteEntry}
      ></StructuredInput>
    );
    const newData = { number: entryNum };

    this.setState((state) => ({
      inputs: state.inputs.concat(newEntry),
      displayData: state.displayData.concat(newData),
    }));
  };
  // adds in a new degree or job

  render() {
    return (
      <FormSection
        inputs={this.state.inputs}
        title={this.props.title}
        displayData={this.state.displayData}
        sendToCV={this.props.sendToCV}
      ></FormSection>
    );
  }
}
// A class for a structured section of input, ie either the education or employment section. Since we need to have a flexible number of entries (ie degrees or jobs), we include a function to add new entries

export { StructuredSection };
