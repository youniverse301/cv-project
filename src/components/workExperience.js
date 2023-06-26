import React, { Component } from 'react';

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      workDescription: "",
    };
  }

  handleInputChange(event, inputName) {
    this.setState(
      {
        [inputName]: event.target.value,
      },
      () => {
        this.props.handleInputChange(this.state, "workExperience");
      }
    );
  }

  handleClick(event) {
    event.preventDefault();
    console.log("sasd")
  }
  

  render() {
    const isBottom = this.props.isBottom;
    return (
      <div>
        <form id="WorkExperience">
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
            value={this.state.workdescription}
            onChange={(event) => this.handleInputChange(event, "workDescription")}
          ></textarea>
          <div id="buttonContainer">
            <button id="deleteBtn">Delete</button>
            {isBottom && <button id="addBtn" onClick={this.handleClick}>Add</button>}
          </div>
        </form>
      </div>
    );
  }
}

export default WorkExperience;