import { FormSection } from "./FormSection";

class StructuredSection extends FormSection {
  submitForm = (e) => {
    e.preventDefault();
    this.props.displayData(this.state.displayData, this.props.title);
  };

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
}

// Contains an "onChange" function for the employment and educational section. Since inputs can contain a number of different entries (ie jobs or degrees) we need the map function to make sure that only the relevant entry is updated. The index variable carries that information. The title tells us which property in the entry needs to be updated, and the value tells us what the new value for the property should be
// Also contains the submit form to add data to the cv
export { StructuredSection };
