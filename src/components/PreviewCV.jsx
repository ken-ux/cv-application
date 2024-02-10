import PropTypes from "prop-types";

function PreviewCV({ contact, education }) {
  const schools = education.map((school, index) => {
    return (
      <div key={index}>
        <p>{school.schoolName}</p>
        <p>{school.degree}</p>
        <p>
          {school.startYear} to {school.endYear}
        </p>
      </div>
    );
  });

  return (
    <div>
      <div>
        <h1>{contact.name}</h1>
        <p>{contact.email}</p>
        <p>{contact.phoneNumber}</p>
      </div>
      <div>
        <h1>Education</h1>
        {schools}
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
  education: PropTypes.array,
};

export default PreviewCV;
