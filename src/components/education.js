import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "",
      university: "",
      eduStart: "",
      eduEnd: "",
      eduDescription: "",
    };
  }

  handleInputChange(event, inputName) {
    this.setState(
      {
        [inputName]: event.target.value,
      },
      () => {
        this.props.handleInputChange(this.state, "education");
      }
    );
  }

  render() {
    return (
      <div>
        <form id="Education">
          <p>Education</p>
          <input
            type="text"
            placeholder="Course / Program"
            value={this.state.course}
            onChange={(event) => this.handleInputChange(event, "course")}
          />
          <input
            type="text"
            placeholder="University"
            value={this.state.university}
            onChange={(event) => this.handleInputChange(event, "university")}
          />
          <input
            type="text"
            placeholder="Start Date"
            value={this.state.eduStart}
            onChange={(event) => this.handleInputChange(event, "eduStart")}
          />
          <input
            type="text"
            placeholder="End Date"
            value={this.state.eduEnd}
            onChange={(event) => this.handleInputChange(event, "eduEnd")}
          />
          <textarea
            type="text"
            placeholder="Description..."
            id="educationDesc"
            value={this.state.eduDescription}
            onChange={(event) =>
              this.handleInputChange(event, "eduDescription")
            }
          ></textarea>
          <div id="buttonContainer">
            <button id="deleteBtn">Delete</button>
            <button id="addBtn">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
