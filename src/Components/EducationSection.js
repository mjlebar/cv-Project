import { EntryAdd } from "./EntryAdd";
import { DegreeInput } from "./DegreeInput";
import { StructuredSection } from "./StructuredSection";

class EducationSection extends StructuredSection {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [
        <EntryAdd
          type="Degree"
          key={`DegreeAdd`}
          newEntry={this.newDegree}
        ></EntryAdd>,
        <DegreeInput key={0} number={1} onChange={this.onChange}></DegreeInput>,
      ],
      displayData: [{ num: 1 }],
    };
  }

  newDegree = (e) => {
    e.preventDefault();
    const degNum = this.state.inputs.length;
    const newJob = (
      <DegreeInput
        key={this.state.inputs.length - 1}
        number={degNum}
        onChange={this.onChange}
      ></DegreeInput>
    );
    this.setState((state) => ({
      inputs: state.inputs.concat(newJob),
      displayData: state.displayData.concat({ num: degNum }),
    }));
  };
}

export { EducationSection };
