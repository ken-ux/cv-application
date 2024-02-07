function Contact() {
  return (
    <form action="">
      <div className="form-field">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="form-field">
        <label htmlFor="phoneNumber">Phone Number</label>
        <span>Format: 123-456-7890</span>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Contact;
