import React from "react";

const Loader = ({ onEnter }) => {
  return (
    <div id="loader" onClick={onEnter}>
      <div className="marquee">
        <span>Ayushi Srivastava...</span>
        <span>Ayushi Srivastava...</span>
      </div>

      <p className="click-text">CLICK ANYWHERE TO ENTER</p>
    </div>
  );
};

export default Loader;