import PropTypes from "prop-types";
import "../styles/PreviewCV.css";

function PreviewCV({ contact, education, experience }) {
  const schools = education.map((school) => {
    const formattedStartYear = school.startYear.replace("-", "/");
    const formattedEndYear = school.endYear.replace("-", "/");

    return (
      <div className="school" key={school.id}>
        <p>
          {formattedStartYear} to {formattedEndYear}
        </p>
        <div>
          <p className="school-name">{school.schoolName}</p>
          <p>{school.degree}</p>
        </div>
      </div>
    );
  });

  const jobs = experience.map((job) => {
    const formattedStartYear = job.startYear.replace("-", "/");
    const formattedEndYear = job.endYear.replace("-", "/");

    return (
      <div className="job" key={job.id}>
        <p>
          {formattedStartYear} to {formattedEndYear}
        </p>
        <div>
          <p className="company-name">{job.companyName}</p>
          <p className="position-name">{job.position}</p>
          <p>{job.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="cv-container">
      <div className="contact-container">
        <h1>{contact.name}</h1>
        <p>
          {contact.email} | {contact.phoneNumber}
        </p>
      </div>
      <div className="education-container">
        <h2>Education</h2>
        <hr />
        {schools}
      </div>
      <div className="experience-container">
        <h2>Experience</h2>
        <hr />
        {jobs}
      </div>
    </div>
  );
}

PreviewCV.propTypes = {
  contact: PropTypes.object,
  education: PropTypes.array,
  experience: PropTypes.array,
};

export default PreviewCV;
