// components/Popup.js
import React from 'react';

const Popup = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={handleClose}>Close</button>
        <p>Popup content here</p>
      </section>
    </div>
  );
};

export default Popup;
