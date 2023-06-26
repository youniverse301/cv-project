import { Component } from "react";
import { PersonalDetails } from "./components/personalDetails";
import WorkExperience from "./components/workExperience";
import Education from "./components/education";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalDetails: {},
      workExperience: {},
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