import React from "react";

export const Step = ({ isActive, render }) => (isActive ? render() : null);

export const Previous = ({ isPreviousActive, goToPreviousStep }) =>
  isPreviousActive ? (
    <button
      type="button"
      onClick={() => goToPreviousStep()}
      color="red"
      size="large"
    >
      Previous
    </button>
  ) : null;

export const Next = ({ isNextActive, goToNextStep }) =>
  isNextActive ? (
    <button
      type="button"
      onClick={() => goToNextStep()}
      color="green"
      size="large"
    >
      Next
    </button>
  ) : null;

export const Submit = ({ isLastStep }) =>
  isLastStep ? (
    <button type="submit" size="large">
      Submit
    </button>
  ) : null;
