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
  // the onChange function used here is a touch complicated, and shared with educational section. Find the function in StructuredSection

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
  // adds in a new degree, and by updating state rerenders
}
// this is the part of the input form where education is added. Since we need to have a flexible number of degrees, we include a function to add new degrees

export { EducationSection };
