function Experience() {
  return (
    <form action="">
      <div className="form-field">
        <label htmlFor="company">Company Name:</label>
        <input
          autoComplete="organization"
          type="text"
          name="company"
          id="company"
        />
      </div>
      <div className="form-field">
        <label htmlFor="position">Position Title:</label>
        <input type="text" name="position" id="position" />
      </div>
      <div className="form-field">
        <label htmlFor="desc">Description</label>
        <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
      </div>
      <div className="form-field">
        <label htmlFor="startYear">From:</label>
        <input type="month" name="startYear" id="startYear" />
        <label htmlFor="endYear">To:</label>
        <input type="month" name="endYear" id="endYear" />
      </div>
      <div className="form-field checkbox">
        <input type="checkbox" name="currentJob" id="currentJob" />
        <label htmlFor="currentJob">
          I am currently working in this position.
        </label>
      </div>
      <button type="button">Add Another Position</button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Experience;
