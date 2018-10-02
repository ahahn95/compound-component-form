import React from 'react';

export const Step = ({ isActive, render }) =>
  isActive ? <React.Fragment>{render()}</React.Fragment> : null;

export const Previous = ({ isPreviousActive, goToPreviousStep }) =>
  isPreviousActive ? (
    <button onClick={() => goToPreviousStep()} color="red" size="large">
      Previous
    </button>
  ) : null;

const Next = props => {
  if (props.isNextActive) {
    return (
      <button onClick={() => props.goToNextStep()} color="green" size="large">
        Next
      </button>
    );
  }
  return null;
};

const Submit = props => {
  if (props.isLastStep) {
    return (
      <button onClick={() => props.handleSubmit()} size="large">
        Submit
      </button>
    );
  }
  return null;
};
