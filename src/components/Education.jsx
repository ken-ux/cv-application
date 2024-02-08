function Education() {
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
        <input type="month" name="endYear" id="endYear" />
      </div>
      <div className="form-field checkbox">
        <input type="checkbox" name="currentSchool" id="currentSchool" />
        <label htmlFor="currentSchool">
          I am currently attending this school.
        </label>
      </div>
      <button type="button">Add Another School</button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Education;
