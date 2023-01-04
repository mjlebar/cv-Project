import { FormSection } from "./FormSection";

class StructuredSection extends FormSection {
  onChange = (title, value, index) => {
    this.setState((state) => ({
      displayData: state.displayData.map((entry) => {
        if (entry.num === index) {
          entry[title] = value;
          return entry;
        } else {
          return entry;
        }
      }),
    }));
  };
}

// All this class does is contain an "onChange" function for the employment and educational section. Since display data can contain a number of different entries (ie jobs or degrees) we need the map function to make sure that only the relevant entry is updated. The index variable carries that information. The title tells us which property in the entry needs to be updated, and the value tells us what the new value for the property should be
export { StructuredSection };
