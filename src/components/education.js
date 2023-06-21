import React, { Component } from 'react';


class Education extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
    render() {
        return (
          <form id='Education'>
            <p>Education</p>
            <input type='text' placeholder='Course / Program'></input>
            <input type='text' placeholder='University'></input>
            <input type='text' placeholder='Start Date'></input>
            <input type='text' placeholder='End Date'></input>
            <input type='text' placeholder='Location'></input>
            <textarea type='text' placeholder='Description...' id='educationDesc'></textarea>
          </form>
        );
      }
}

export default Education;