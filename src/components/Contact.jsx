import { useState } from "react";
import PropTypes from "prop-types";

function Contact({ submitForm }) {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");

  return (
    <form action="">
      <div className="form-field">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="phoneNumber">Phone Number</label>
        <span>Format: 123-456-7890</span>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          submitForm({ name: name, email: email, phoneNumber: phoneNumber });
        }}
      >
        Submit
      </button>
    </form>
  );
}

Contact.propTypes = {
  submitForm: PropTypes.func,
};

export default Contact;
