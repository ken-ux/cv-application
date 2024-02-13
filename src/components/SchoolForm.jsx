import { useState } from "react";
import PropTypes from "prop-types";

function SchoolForm({ submitForm, education }) {
  // Disables the endYear input and checks the currentSchool checkbox if there's an endYear
  const [checked, setChecked] = useState(
    education.endYear === "Present" ? true : false
  );
  const [schoolName, setSchoolName] = useState(education.schoolName);
  const [degree, setDegree] = useState(education.degree);
  const [startYear, setStartYear] = useState(education.startYear);
  const [endYear, setEndYear] = useState(education.endYear);

  return (
    <form>
      <div className="form-field">
        <label htmlFor="schoolName">School Name:</label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          name="degree"
          id="degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="startYear">From:</label>
        <input
          type="month"
          name="startYear"
          id="startYear"
          value={startYear}
          onChange={(e) => setStartYear(e.target.value)}
        />
        <label htmlFor="endYear">To:</label>
        <input
          type="month"
          name="endYear"
          id="endYear"
          value={checked ? "" : endYear}
          disabled={checked ? true : null}
          onChange={(e) => setEndYear(e.target.value)}
        />
      </div>
      <div className="form-field checkbox">
        <input
          type="checkbox"
          name="currentSchool"
          id={`currentSchool_${education.id}`}
          defaultChecked={checked ? true : null}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <label htmlFor={`currentSchool_${education.id}`}>
          I am currently attending this school.
        </label>
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          submitForm([
            {
              id: education.id,
              schoolName: schoolName,
              degree: degree,
              startYear: startYear,
              endYear: checked ? "Present" : endYear,
            },
          ]);
        }}
      >
        Submit
      </button>
    </form>
  );
}

SchoolForm.propTypes = {
  submitForm: PropTypes.func,
  education: PropTypes.object,
};

export default SchoolForm;
