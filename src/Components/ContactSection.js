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
// The section of the input that handles contact information. Fairly simple, just updates a prop with inputted data whenever a field is changed

export { ContactSection };
