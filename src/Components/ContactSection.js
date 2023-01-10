import { FormSection } from "./FormSection";
import { Input } from "./Input";

class ContactSection extends FormSection {
  constructor(props) {
    super(props);
    this.state = {
      inputs: this.props.titles.map((title, index) => {
        return (
          <Input
            key={index}
            title={title}
            onChange={this.handleFieldChange}
          ></Input>
        );
      }),
    };
  }

  handleFieldChange = (title, value) => {
    this.setState((state) => ({
      displayData: {
        ...state.displayData,
        [title]: value,
      },
    }));
  };
}
// The section of the input that handles contact information. Fairly simple, just updates the displayData state with inputted data whenever a field is changed. This looks quite different for the employment and education sections, as they need to encapsulate specific title value pairs within entries, since two different job entries will contain two instances of "company"

export { ContactSection };
