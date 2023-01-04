import { EntryAdd } from "./EntryAdd";
import { JobInput } from "./JobInput";
import { StructuredSection } from "./StructuredSection";

class EmploymentSection extends StructuredSection {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [
        <EntryAdd type="Job" key={`JobAdd`} newEntry={this.newJob}></EntryAdd>,
        <JobInput key={0} number={1} onChange={this.onChange}></JobInput>,
      ],
      displayData: [{ num: 1 }],
    };
  }
  // the onChange function used here is a touch complicated, and shared with educational section. Find the function in StructuredSection

  newJob = (e) => {
    e.preventDefault();
    const jobNum = this.state.inputs.length;
    const newJob = (
      <JobInput
        key={this.state.inputs.length - 1}
        number={jobNum}
        onChange={this.onChange}
      ></JobInput>
    );
    this.setState((state) => ({
      inputs: state.inputs.concat(newJob),
      displayData: state.displayData.concat({ num: jobNum }),
    }));
  };
}

// this is the part of the input form where employment is added. Since we need to have a flexible number of jobs, we include a function to add new jobs

export { EmploymentSection };
