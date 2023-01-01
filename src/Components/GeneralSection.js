import { FormSection } from "./FormSection";
import { Input } from "./Input";

class GeneralSection extends FormSection {
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

export { GeneralSection };
