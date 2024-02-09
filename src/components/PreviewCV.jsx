import PropTypes from "prop-types";

function PreviewCV({ contact }) {
  return (
    <div>
      <div>
        <h1>{contact.name}</h1>
        <p>{contact.email}</p>
        <p>{contact.phoneNumber}</p>
      </div>
      <div>
        <h1>Education</h1>
        <p>School Name</p>
        <p>Degree</p>
        <p>YYYY to YYYY</p>
      </div>
      <div>
        <h1>Experience</h1>
        <p>Company Name</p>
        <p>Position</p>
        <p>Description</p>
        <p>YYYY to YYYY</p>
      </div>
    </div>
  );
}

PreviewCV.propTypes = {
  contact: PropTypes.object,
};

export default PreviewCV;
