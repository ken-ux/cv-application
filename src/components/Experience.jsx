import { useState } from "react";
import PropTypes from "prop-types";

function Experience({ submitForm, experience }) {
  const [checked, setChecked] = useState(
    experience.endYear === "Current" ? true : false
  );
  const [companyName, setCompanyName] = useState(experience.companyName);
  const [position, setPosition] = useState(experience.position);
  const [description, setDescription] = useState(experience.description);
  const [startYear, setStartYear] = useState(experience.startYear);
  const [endYear, setEndYear] = useState(experience.endYear);

  return (
    <form action="">
      <div className="form-field">
        <label htmlFor="company">Company Name:</label>
        <input
          autoComplete="organization"
          type="text"
          name="company"
          id="company"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="position">Position Title:</label>
        <input
          type="text"
          name="position"
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="desc">Description</label>
        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="10"
          placeholder="Add in your responsibilities for this position."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
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
          name="currentJob"
          id={`currentJob_${experience.id}`}
          defaultChecked={checked ? true : null}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <label htmlFor={`currentJob_${experience.id}`}>
          I am currently working in this position.
        </label>
      </div>
      {/* <button type="button">Add Another Position</button> */}
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          submitForm([
            {
              id: experience.id,
              companyName: companyName,
              position: position,
              description: description,
              startYear: startYear,
              endYear: checked ? "Current" : endYear,
            },
          ]);
        }}
      >
        Submit
      </button>
    </form>
  );
}

Experience.propTypes = {
  submitForm: PropTypes.func,
  experience: PropTypes.object,
};

export default Experience;
