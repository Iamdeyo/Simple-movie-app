import React from 'react';

function Loading() {
  return (
    <div className="loading d-flex align-items-center justify-content-center">
      <div className="spinner-border my-text-color" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
}

export default Loading;
