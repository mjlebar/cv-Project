import { EntryAdd } from "./EntryAdd";
import { JobInput } from "./JobInput";
import { StructuredSection } from "./StructuredSection";

class EmploymentSection extends StructuredSection {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [
        <EntryAdd type="Job" key={`JobAdd`} newEntry={this.newJob}></EntryAdd>,
        <JobInput
          key={0}
          number={1}
          deleteEntry={this.deleteEntry}
          updateParent={this.onChange}
        ></JobInput>,
      ],
      displayData: [{ number: 1 }],
    };
  }
  // displayData basically creates an object to be updated when we enter input in the JobInput fields. The onChange function constructed in StructuredSection manages this - what happens when we change an individual entry in a structured section - say, a specific job - is that whatever data we change (eg "Company: Acme") will be passed into the entry in DisplayData with the number corresponding to the section we've changed. So that's why we're updating displayData every time we add or remove an entry but not really putting much into the entries in displayData - the onChange function does that for us.

  deleteEntry = (indexToDelete) => {
    let diff = 0;
    // this tracks how much we need to update the number of each entry we're going through... once we go through the input to remove, we change this to -1 so that forthcoming entries are dropped down a number
    this.setState((state) => ({
      inputs: state.inputs
        .map((entry, index) => {
          if (entry.props.number === indexToDelete) {
            diff--;
            return null;
          } else if (entry.props.type === "Job") {
            return entry;
          } else {
            return (
              <JobInput
                key={index - 1 + diff}
                number={entry.props.number + diff}
                deleteEntry={this.deleteEntry}
                updateParent={this.onChange}
              ></JobInput>
            );
          }
        })
        .filter((entry) => entry !== null),
      displayData: state.displayData.slice(0, -1),
    }));
  };
  // this is almost identical to the same named method in education section - I would've combined the two, but I don't know of a convenient way to express the appropriate conditional in JSX yet. Basically, we need to make sure that job numbers (ie job 1, job 2, etc) update appropriately when we delete a job. To do this, we not only need to remove the appropriate job from the array but update each of the entries after it. That's what this array.map then .filter is doing. I know there are other ways to do this (eg array.reduce) but seems the cleanest to me. The display data slice just knocks off an entry. Since all the entries are renumbered, when we submit they'll fill out displayData correctly

  newJob = (e) => {
    e.preventDefault();
    const jobNum = this.state.inputs.length;
    const newJob = (
      <JobInput
        key={jobNum - 1}
        number={jobNum}
        updateParent={this.onChange}
        deleteEntry={this.deleteEntry}
      ></JobInput>
    );
    const newEntry = { number: jobNum };
    this.setState((state) => ({
      inputs: state.inputs.concat(newJob),
      displayData: state.displayData.concat(newEntry),
    }));
  };
}

// this is the part of the input form where employment is added. Since we need to have a flexible number of jobs, we include a function to add new jobs. This is very similar to education section, but I'm not sure how to efficiently combine them.

export { EmploymentSection };
