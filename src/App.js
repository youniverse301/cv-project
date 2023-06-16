import { Component } from "react";
import { PersonalDetails, WorkExperience } from "./components/personalDetails";

class App extends Component {
  constructor(props) {
    super(props);
} 
  render() {
  return (
    <div className="container">
      <div className="editContainer">
        <PersonalDetails />
        <WorkExperience />


      </div>
      <div className="productContainer">

      </div>
    </div>
  );
  }
}

export default App;
