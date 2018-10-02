import React from 'react';

export const StepList = ({ activeStepIndex, children }) =>
  React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      isActive: index === activeStepIndex
    })
  );

export const ButtonList = ({
  activeStepIndex,
  totalSteps,
  children,
  onPreviousStep,
  onNextStep,
  handleSubmit
}) =>
  React.Children.map(children, (child, index) => {
    if (child.type.name === 'Previous') {
      return React.cloneElement(child, {
        isPreviousActive: activeStepIndex > 0,
        goToPreviousStep: () => onPreviousStep()
      });
    } else if (child.type.name === 'Next') {
      return React.cloneElement(child, {
        isNextActive: activeStepIndex < totalSteps,
        goToNextStep: () => onNextStep()
      });
    } else if (child.type.name === 'Submit') {
      return React.cloneElement(child, {
        isLastStep: activeStepIndex === totalSteps,
        handleSubmit: () => handleSubmit()
      });
    }
  });
