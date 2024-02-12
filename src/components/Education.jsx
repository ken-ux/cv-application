// import { useState } from "react";
import SchoolForm from "./SchoolForm";
import PropTypes from "prop-types";

function Education({ submitForm, education }) {
  // const [forms, setForms] = useState([{ id: 1 }]);

  // const addForm = () => {
  //   let id = forms[forms.length - 1].id + 1;
  //   const newForms = [...forms];
  //   newForms.push({ id: id });
  //   setForms(newForms);
  // };

  // const formsList = forms.map((form) => (
  //   <SchoolForm key={form.id} id={form.id} submitForm={submitForm} />
  // ));

  return (
    <>
      <SchoolForm submitForm={submitForm} education={education[0]} />
      {/* <button type="button" onClick={addForm}>
        Add Another School
      </button> */}
    </>
  );
}

Education.propTypes = {
  submitForm: PropTypes.func,
  education: PropTypes.array,
};

export default Education;
