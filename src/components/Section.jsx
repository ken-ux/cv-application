import PropTypes from "prop-types";
import "../styles/Section.css";
import { useState } from "react";
import expandMore from "../images/expand_more.svg";
import expandLess from "../images/expand_less.svg";

function Section({ title, children }) {
  const [visible, setVisible] = useState(false);

  function clickHandler() {
    setVisible(!visible);
  }

  return (
    <section>
      <div className="section-header" onClick={clickHandler}>
        <h1 className={!visible ? "collapsed" : undefined}>{title}</h1>
        <img src={visible ? expandLess : expandMore} alt="" />
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
