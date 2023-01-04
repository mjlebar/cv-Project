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
export { StructuredSection };
