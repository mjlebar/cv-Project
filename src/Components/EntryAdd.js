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

export { EntryAdd };
