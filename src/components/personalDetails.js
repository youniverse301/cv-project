import React, { Component } from 'react';

class PersonalDetails extends Component {
    constructor() {
      super();
      this.state = {
        
      };
    }
    render() {
        return (
          <form id='PersonalDetails'>
            <p>Personal Details</p>
            <input type='text' placeholder='Name'></input>
            <input type='text' placeholder='Title'></input>
            <input type='text' placeholder='Phone'></input>
            <input type='text' placeholder='Email'></input>
            <input type='text' placeholder='Location'></input>
            <textarea type='text' placeholder='Description...' id='personalDesc'></textarea>
          </form>
        );
      }
}

class WorkExperience extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
    render() {
        return (
          <form id='WorkExperience'>
            <p>Personal Details</p>
            <input type='text' placeholder='Name'></input>
            <input type='text' placeholder='Title'></input>
            <input type='text' placeholder='Phone'></input>
            <input type='text' placeholder='Email'></input>
            <input type='text' placeholder='Location'></input>
            <textarea type='text' placeholder='Description...' id='personalDesc'></textarea>
          </form>
        );
      }
}
    
export {
    PersonalDetails,
    WorkExperience,
}