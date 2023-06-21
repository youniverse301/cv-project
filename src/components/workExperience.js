import React, { Component } from 'react';

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    };
  }

  handleInputChange(event, inputName) {
    this.setState(
      {
        [inputName]: event.target.value,
      },
      () => {
        this.props.handleInputChange(this.state);
      }
    );
  }

  render() {
    return (
      <div>
        <form id="WorkExperience">
          <p>Work Experience</p>
          <input
            type="text"
            placeholder="Company"
            value={this.state.company}
            onChange={(event) => this.handleInputChange(event, "company")}
          />
          <input
            type="text"
            placeholder="Position"
            value={this.state.position}
            onChange={(event) => this.handleInputChange(event, "position")}
          />
          <input
            type="text"
            placeholder="Start Date"
            value={this.state.startDate}
            onChange={(event) => this.handleInputChange(event, "startDate")}
          />
          <input
            type="text"
            placeholder="End Date"
            value={this.state.endDate}
            onChange={(event) => this.handleInputChange(event, "endDate")}
          />
          <textarea
            type="text"
            placeholder="Description..."
            id="workDesc"
            value={this.state.description}
            onChange={(event) => this.handleInputChange(event, "description")}
          ></textarea>
          <div id="buttonContainer">
            <button id="deleteBtn">Delete</button>
            <button id="addBtn">Add</button>
          </div>
        </form>
        <div></div>
      </div>
    );
  }
}
  

  export default WorkExperience;