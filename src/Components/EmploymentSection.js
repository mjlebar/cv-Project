import { FormSection } from "./FormSection";
import { JobAdd } from "./JobAdd";
import { JobInput } from "./JobInput";

class EmploymentSection extends FormSection {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [
        <JobAdd key={`JobAdd`} newJob={this.newJob}></JobAdd>,
        <JobInput key={0} number={1} onChange={this.onChange}></JobInput>,
      ],
      displayData: [{ Job: 1 }],
    };
  }

  onChange = (title, value, index) => {
    this.setState((state) => ({
      displayData: state.displayData.map((entry) => {
        if (entry.Job === index) {
          entry[title] = value;
          return entry;
        } else {
          return entry;
        }
      }),
    }));
  };

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
      displayData: state.displayData.concat({ Job: jobNum }),
    }));
  };
}

export { EmploymentSection };
