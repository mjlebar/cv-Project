import { Component } from "react";

class EntryAdd extends Component {
  render() {
    return (
      <button type="button" className="entry-add" onClick={this.props.newEntry}>
        Add new {this.props.type}
      </button>
    );
  }
}
// A button for the employment and educational sections, allowing for a new entry (either a job or a degree)

export { EntryAdd };
