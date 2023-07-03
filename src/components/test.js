import { Component } from "react";
import { PersonalDetails } from "./components/personalDetails";
import WorkExperience from "./components/workExperience";
import Education from "./components/education";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalDetails: {},
      workExperience: [],
      education: {},
      workExperienceIndex: 0,
      educationIndex: 0,
      items: [],
    };
  }

  handleInputChange(inputValues, componentName) {
    this.setState((prevState) => ({
      [componentName]: inputValues,
    }));
  }

  render() {
    const { workExperienceIndex, educationIndex } = this.state;

    return (
      <div className="container">
        <div className="editContainer">
          <PersonalDetails
            handleInputChange={(inputValues) =>
              this.handleInputChange(inputValues, "personalDetails")
            }
          />
          <p id="workHeader">Work Experience</p>
          <WorkExperience
            handleInputChange={(inputValues) =>
              this.handleInputChange(inputValues, "workExperience")
            }
            isBottom={workExperienceIndex === 0} 
          />
          <Education
            handleInputChange={(inputValues) =>
              this.handleInputChange(inputValues, "education")
            }
          />
        </div>
        <div className="productContainer">
          <div id="productHeader">
              <div id="leftHeader">
                <h1 id="productTitle">{this.state.personalDetails.name}</h1>
                <p id="companyName">{this.state.personalDetails.title}</p>
              </div>
            <div id="rightHeader">
              <div id="phone">
                <img id="phoneImg" src={require("./images/apple.png")} />
                <p id="productPhone">{this.state.personalDetails.phone}</p>
              </div>
              <div id="email">
                <img id="emailImg" src={require("./images/email.png")} />
                <p id="productEmail">{this.state.personalDetails.email}</p>
              </div>
              <div id="location">
                <img id="locationImg" src={require("./images/location.png")} />              
                <p id="productLocation">{this.state.personalDetails.location}</p>
              </div>
            </div>
            <div id="bottomHeader"></div>
            <p id="productDescription">{this.state.personalDetails.description}</p>
          </div>
          <div id="productWork">
            <p id="workExperience">Work Experience</p>
            <p id="workPosition">{this.state.workExperience.position}</p>
            <p id="workTitle">{this.state.workExperience.company} | </p>
            <p id="workStart">{this.state.workExperience.startDate} -</p>
            <p id="workEnd">{this.state.workExperience.endDate}</p>
            <p id="workDescription">{this.state.workExperience.workDescription}</p>
          </div>
          <div id="productEducation">
            <p id="workExperience">Education</p>
            <p id="eduCourse">{this.state.education.course}</p>
            <p id="eduUniversity">{this.state.education.university} | </p>
            <p id="eduStart">{this.state.education.eduStart} -</p>
            <p id="eduEnd">{this.state.education.eduEnd}</p>
            <p id="eduDescription">{this.state.education.eduDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "",
      phone: "",
      email: "",
      location: "",
      description: "",
      textareaHeight: "auto",
    };
  }

  handleInputChange(event, inputName) {
    this.setState(
      {
        [inputName]: event.target.value,
      },
      () => {
        if (inputName === "description") {
          this.updateTextareaHeight();
        }
        this.props.handleInputChange(this.state, "personalDetails");
      }
    );
  }

  updateTextareaHeight = () => {
    const textarea = this.textareaRef;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  render() {
    return (
      <form id="PersonalDetails">
        <p>Personal Details</p>
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={(event) => this.handleInputChange(event, "name")}
        />
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={(event) => this.handleInputChange(event, "title")}
        />
        <input
          type="text"
          placeholder="Phone"
          value={this.state.phone}
          onChange={(event) => this.handleInputChange(event, "phone")}
        />
        <input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={(event) => this.handleInputChange(event, "email")}
        />
        <input
          type="text"
          placeholder="Location"
          value={this.state.location}
          onChange={(event) => this.handleInputChange(event, "location")}
        />
        <textarea
          type="text"
          placeholder="Description..."
          id="personalDesc"
          value={this.state.description}
          style={{ height: this.state.textareaHeight }}
          onChange={(event) => this.handleInputChange(event, "description")}
          ref={(ref) => (this.textareaRef = ref)}
        ></textarea>
      </form>
    );
  }
}


export {
    PersonalDetails,
}

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