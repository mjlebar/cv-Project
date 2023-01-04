import { Component } from "react";
import Phone from "./phone.svg";
import Email from "./email.svg";
import Home from "./home.svg";
import { Icon } from "../Styles/Icon.js";
import { IconText } from "../Styles/IconText.js";

class ContactCVsection extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.entries.Name}</h1>
        <IconText>
          <Icon src={Phone} alt={"Phone logo"}></Icon>
          <div>
            <p>{this.props.entries["Phone Number"]}</p>
          </div>
        </IconText>
        <IconText>
          <Icon src={Email} alt={"Email logo"}></Icon>
          <p>{this.props.entries.Email}</p>
        </IconText>
        <IconText>
          <Icon src={Home} alt={"Home logo"}></Icon>
          <p>{this.props.entries.Address}</p>
        </IconText>
      </div>
    );
  }
}
// Const

export { ContactCVsection };
