import PropTypes from "prop-types";
import "../styles/Section.css";
import { useState } from "react";

function Section({ title, children }) {
  const [visible, setVisible] = useState(false);

  function clickHandler() {
    setVisible(!visible);
  }

  return (
    <section onClick={clickHandler}>
      <h1>{title}</h1>
      {visible && children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
