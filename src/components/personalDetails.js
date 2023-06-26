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
