import PropTypes from "prop-types";

function PreviewCV({ contact, education, experience }) {
  const schools = education.map((school) => {
    return (
      <div key={school.id}>
        <p>{school.schoolName}</p>
        <p>{school.degree}</p>
        <p>
          {school.startYear} to {school.endYear}
        </p>
      </div>
    );
  });

  const jobs = experience.map((job) => {
    return (
      <div key={job.id}>
        <p>{job.companyName}</p>
        <p>{job.position}</p>
        <p>{job.description}</p>
        <p>
          {job.startYear} to {job.endYear}
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
