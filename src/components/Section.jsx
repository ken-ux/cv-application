import PropTypes from "prop-types";
import "../styles/Section.css";
import { useState } from "react";

function Section({ title, children }) {
  const [visible, setVisible] = useState(true);

  function clickHandler() {
    setVisible(!visible);
  }

  return (
    <section>
      <div>
        <h1
          onClick={clickHandler}
          className={!visible ? "collapsed" : undefined}
        >
          {title}
        </h1>
      </div>
      {visible && children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
