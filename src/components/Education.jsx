import { useState } from "react";

function SchoolForm() {
  const [checked, setChecked] = useState(false);

  return (
    <form action="">
      <div className="form-field">
        <label htmlFor="schoolName">School Name:</label>
        <input type="text" name="schoolName" id="schoolName" />
      </div>
      <div className="form-field">
        <label htmlFor="degree">Degree:</label>
        <input type="text" name="degree" id="degree" />
      </div>
      <div className="form-field">
        <label htmlFor="startYear">From:</label>
        <input type="month" name="startYear" id="startYear" />
        <label htmlFor="endYear">To:</label>
        <input
          type="month"
          name="endYear"
          id="endYear"
          disabled={checked ? true : null}
        />
      </div>
      <div className="form-field checkbox">
        <input
          type="checkbox"
          name="currentSchool"
          id="currentSchool"
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <label htmlFor="currentSchool">
          I am currently attending this school.
        </label>
      </div>
      <button type="button">Delete</button>
    </form>
  );
}

function Education() {
  const [forms, setForms] = useState([{ id: 1 }]);

  const addForm = () => {
    const id = forms[forms.length - 1].id + 1;
    const newForms = [...forms];
    newForms.push({ id: id });
    setForms(newForms);
  };

  return (
    <>
      {forms.map((form) => (
        <SchoolForm key={form.id} />
      ))}
      <button type="button">Submit</button>
      <button type="button" onClick={addForm}>
        Add Another School
      </button>
    </>
  );
}

export default Education;
