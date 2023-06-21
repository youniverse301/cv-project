import { Component } from "react";
import { PersonalDetails } from "./components/personalDetails";
import WorkExperience from "./components/workExperience";
import Education from "./components/education";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: {},
      items: [],
    };
  }

  handleInputChange(inputValues) {
    this.setState({
      inputValue: inputValues,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="editContainer">
          <PersonalDetails
            handleInputChange={(inputValues) => this.handleInputChange(inputValues)}
          />
          <WorkExperience 
           handleInputChange={(inputValues) => this.handleInputChange(inputValues)}
           />
          <WorkExperience 
          handleInputChange={(inputValues) => this.handleInputChange(inputValues)}
          />
          <Education />
        </div>
        <div className="productContainer">
          <div id="productHeader">
            <div id="leftHeader">
              <h1 id="productTitle">{this.state.inputValue.name}</h1>
              <p id="companyName">{this.state.inputValue.title}</p>
            </div>
          <div id="rightHeader">
            <div id="phone">
              <img id="phoneImg" src="../public/apple.png"/>
              <p id="productPhone">{this.state.inputValue.phone}</p>
            </div>
            <div id="email">
              <img id="emailImg"></img>
              <p id="productEmail">{this.state.inputValue.email}</p>
            </div>
            <div id="location">
              <img id="locationImg"></img>
              <p id="productLocation">{this.state.inputValue.location}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
