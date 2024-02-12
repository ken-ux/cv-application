import { useState } from "react";
import PropTypes from "prop-types";

function Contact({ contact, submitForm }) {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);

  return (
    <form action="">
      <div className="form-field">
        <label htmlFor="name">Name:</label>
        <input
          autoComplete="name"
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
          autoComplete="email"
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
  contact: PropTypes.object,
};

export default Contact;
