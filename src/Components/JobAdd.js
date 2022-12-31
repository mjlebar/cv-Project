import { Component } from "react";

class JobAdd extends Component {
  render() {
    return (
      <button type="button" className="job-add" onClick={this.props.newJob}>
        Add new job
      </button>
    );
  }
}

export { JobAdd };
