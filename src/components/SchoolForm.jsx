import { useState } from "react";
import PropTypes from "prop-types";

function SchoolForm({ id, submitForm }) {
  const [schoolName, setSchoolName] = useState("College of Imaginary");
  const [degree, setDegree] = useState("Degree in Major");
  const [startYear, setStartYear] = useState("2020-01");
  const [endYear, setEndYear] = useState("2024-01");

  // Disables the endYear input and checks the currentSchool checkbox if there's an endYear
  const [checked, setChecked] = useState(false);

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
          id={id}
          defaultChecked={checked ? true : null}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <label htmlFor={id}>I am currently attending this school.</label>
      </div>
      <button type="button">Delete</button>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault;
          // remember that the education hook is an array
          // submitForm([])
        }}
      >
        Submit
      </button>
    </form>
  );
}

SchoolForm.propTypes = {
  id: PropTypes.number,
  submitForm: PropTypes.func,
};

export default SchoolForm;
