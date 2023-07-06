import React, { useState, useEffect } from "react";

function FormLogic() {
  const [personalDetails, setPersonalDetails] = useState([
    {
      name: 'John Doe',
      title: 'Software Engineer',
      phone: '123-456-7890',
      email: 'johndoe@gmail.com',
      location: 'New York, NY',
      personalDesc: 'Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.'
    }
  ]);
  const [workExperience, setWorkExperience] = useState([
    {
      company: 'ABC Corp',
      position: 'Engineering Manager',
      workStart: '2021',
      workEnd: 'Present',
      workDesc: 'Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.'
    },
    {
      company: 'XYZ Inc',
      position: 'Senior Software Engineer',
      workStart: '2018',
      workEnd: '2021',
      workDesc: 'Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit.'
    },
    {
      company: '123 Tech',
      position: 'Full Stack Developer',
      workStart: '2017',
      workEnd: '2018',
      workDesc: 'Enim elit aliquip fugiat anim proident.'
    }
  ]);
  const [education, setEducation] = useState([
    {
      course: 'Bachelor of Science',
      university: 'XYZ University',
      eduStart: '2011',
      eduEnd: '2015',
      eduDesc: ''
    },
    {
      course: 'Master of Business Administration',
      university: 'ABC University',
      eduStart: '2015',
      eduEnd: '2017',
      eduDesc: ''
    }
  ]);

  const handleChange = (e, index, type) => {
    const { name, value } = e.target;
    let updatedData;
    if (type === 'personalDetails') {
      updatedData = personalDetails.map((detail, i) => {
        if (i === index) {
          return { ...detail, [name]: value };
        }
        return detail;
      });
      setPersonalDetails(updatedData);
    } else {
      let stateKey;
      let stateValue;
      if (type === 'workExperience') {
        stateKey = 'workExperience';
        stateValue = workExperience;
      } else if (type === 'education') {
        stateKey = 'education';
        stateValue = education;
      }

      updatedData = stateValue.map((item, i) => {
        if (i === index) {
          return { ...item, [name]: value };
        }
        return item;
      });

      if (stateKey === 'workExperience') {
        setWorkExperience(updatedData);
      } else if (stateKey === 'education') {
        setEducation(updatedData);
      }
    }
  };

  const addEntry = (type) => {
    let stateKey;
    let stateValue;
    if (type === 'personalDetails') {
      stateKey = 'personalDetails';
      stateValue = personalDetails;
    } else if (type === 'workExperience') {
      stateKey = 'workExperience';
      stateValue = workExperience;
    } else if (type === 'education') {
      stateKey = 'education';
      stateValue = education;
    }

    const emptyEntry = {};
    Object.keys(stateValue[0]).forEach(key => {
      emptyEntry[key] = '';
    });

    const updatedData = [...stateValue, emptyEntry];

    if (stateKey === 'personalDetails') {
      setPersonalDetails(updatedData);
    } else if (stateKey === 'workExperience') {
      setWorkExperience(updatedData);
    } else if (stateKey === 'education') {
      setEducation(updatedData);
    }
  };

  const deleteEntry = (index, type) => {
    let stateKey;
    let stateValue;
    if (type === 'personalDetails') {
      stateKey = 'personalDetails';
      stateValue = personalDetails;
    } else if (type === 'workExperience') {
      stateKey = 'workExperience';
      stateValue = workExperience;
    } else if (type === 'education') {
      stateKey = 'education';
      stateValue = education;
    }

    const updatedData = [...stateValue];
    updatedData.splice(index, 1);

    if (stateKey === 'personalDetails') {
      setPersonalDetails(updatedData);
    } else if (stateKey === 'workExperience') {
      setWorkExperience(updatedData);
    } else if (stateKey === 'education') {
      setEducation(updatedData);
    }
  };

  useEffect(() => {
    const textareas = document.getElementsByTagName("textarea");
    for (let i = 0; i < textareas.length; i++) {
      adjustTextareaHeight({ target: textareas[i] });
    }
  }, []);

  const adjustTextareaHeight = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

    return (
      <div className="container">
        <div className="editContainer">
        <div>
          <p id="personalHeader">Personal Details</p>
          {personalDetails.map((detail, index) => (
            <div id="PersonalDetails" key={index}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={detail.name}
                  onChange={(e) => handleChange(e, index, 'personalDetails')}
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={detail.title}
                  onChange={(e) => handleChange(e, index, 'personalDetails')}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={detail.phone}
                  onChange={(e) => handleChange(e, index, 'personalDetails')}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={detail.email}
                  onChange={(e) => handleChange(e, index, 'personalDetails')}
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={detail.location}
                  onChange={(e) => handleChange(e, index, 'personalDetails')}
                />
               <textarea
                  id="personalDesc"
                  name="personalDesc"
                  placeholder="Description..."
                  value={detail.personalDesc}
                  onChange={(e) => {
                    handleChange(e, index, 'personalDetails');
                    adjustTextareaHeight(e);
                  }}
                  style={{
                    resize: "none",
                    overflow: "hidden"
                  }}
                />
            </div>
          ))}
          
        </div>

        <div>
          <p id="workHeader">Work Experience:</p>
          {workExperience.map((experience, index) => (
              <div id="WorkExperience" key={index}>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={experience.company}
                  onChange={(e) => handleChange(e, index, 'workExperience')}
                />
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={experience.position}
                  onChange={(e) => handleChange(e, index, 'workExperience')}
                />
                <input
                  type="text"
                  name="workStart"
                  placeholder="Start Date"
                  value={experience.workStart}
                  onChange={(e) => handleChange(e, index, 'workExperience')}
                />
                <input
                  type="text"
                  name="workEnd"
                  placeholder="End Date"
                  value={experience.workEnd}
                  onChange={(e) => handleChange(e, index, 'workExperience')}
                />
                <textarea
                  ref={textareaRef => textareaRef = textareaRef}
                  id="workDesc"
                  name="workDesc"
                  placeholder="Description..."
                  value={experience.workDesc}
                  onChange={(e) => handleChange(e, index, 'workExperience')}
                />
                <div className="btnContainer">
                  <button type="button" id="deleteBtn" onClick={() => deleteEntry(index, 'workExperience')}>
                    Delete
                  </button>
                  {index === workExperience.length - 1 && (
                    <button type="button" id="addBtn" onClick={() => addEntry('workExperience')}>
                      Add
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

        <div>
          <p id="educationHeader">Education:</p>
          {education.map((edu, index) => (
            <div id="Education" key={index}>
                <input
                  type="text"
                  name="course"
                  placeholder="Course / Program"
                  value={edu.course}
                  onChange={(e) => handleChange(e, index, 'education')}
                />
                <input
                  type="text"
                  name="university"
                  placeholder="University"
                  value={edu.university}
                  onChange={(e) => handleChange(e, index, 'education')}
                />
                <input
                  type="text"
                  name="eduStart"
                  placeholder="Start Date"
                  value={edu.eduStart}
                  onChange={(e) => handleChange(e, index, 'education')}
                />
                <input
                  type="text"
                  name="eduEnd"
                  placeholder="End Date"
                  value={edu.eduEnd}
                  onChange={(e) =>  handleChange(e, index, 'education')}
                />
                <textarea
                name="eduDesc"
                id="workDesc"
                placeholder="Description..."
                value={edu.eduDesc}
                onChange={(e) => handleChange(e, index, 'education')}
                />
              <div className="btnContainer">
                  <button type="button" id="deleteBtn" onClick={() => deleteEntry(index, 'education')}>
                    Delete
                  </button>
                  {index === education.length - 1 && (
                    <button type="button" id="addBtn" onClick={() => addEntry('education')}>
                      Add
                    </button>
                  )}
                </div>
            </div>
          ))}
          
        </div>

        </div>

        <div className="productContainer">
        <div>
            {personalDetails.map((detail, index) => (
            <div id="productHeader" key={index}>
              <div id="leftHeader">
                <h1 id="personalName">{detail.name}</h1>
                <p id="personalTitle">{detail.title}</p>
              </div>
              <div id="rightHeader">
                <div id="phone">
                  <img id="phoneImg" src={require("../images/apple.png")} alt="pindrop icon"/>
                  <p id="productPhone">{detail.phone}</p>
                </div>
                <div id="email">
                  <img id="emailImg" src={require("../images/email.png")} alt="envelope icon"/>
                  <p id="productEmail">{detail.email}</p>
                </div>
                <div id="location">
                  <img id="locationImg" src={require("../images/location.png")} alt="pindrop icon" />              
                  <p id="productLocation">{detail.location}</p>
                </div>
              </div>
              <div id="bottomHeader"></div>
              <p id="productDesc">{detail.personalDesc}</p>
            </div>
              
            ))}
            
          </div>
          <div>
            <h4 id="productWorkExperience">Work Experience</h4>
            {workExperience.map((experience, index) => (
              <div id="productWork" key={index}>
                <p id="workTitle">{experience.company} |</p>
                <p id="workPosition">{experience.position}</p>
                <p id="workStart">{experience.workStart} -</p>
                <p id="workEnd">{experience.workEnd}</p>
                <p id="workDescription">{experience.workDesc}</p>
              </div>
            ))}
          </div>
          <div>
            <h4 id="productEducationHeader">Education</h4>
            {education.map((edu, index) => (
              <div id="productEducation" key={index}>
                <p id="eduCourse">{edu.course}</p>
                <p id="eduUniversity"> {edu.university} |</p>
                <p id="eduStart">{edu.eduStart} -</p>
                <p id="eduEnd">{edu.eduEnd}</p>
                <p id="eduDescription">{edu.eduDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}


export {FormLogic};

