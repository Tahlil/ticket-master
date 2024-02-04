import React from 'react';

type PopupProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const Popup: React.FC<PopupProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>{message}</p>
        <div className="popup-buttons">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
