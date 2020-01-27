import React from "react";

const ProgressBar = props => {
  return (
    <div className="progress-bar">
      <Range />
    </div>
  );
};

export const ProgressBarContainer = () => {
  return (
    <div className="container">
      <ProgressBar />
    </div>
  );
};
