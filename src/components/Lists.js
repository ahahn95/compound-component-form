import React from "react";
import { FormConsumer } from "./FormWizard";

export const StepList = ({ children }) => (
  <FormConsumer>
    {({ activeStepIndex, updateFormField }) =>
      React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isActive: index === activeStepIndex
        })
      )
    }
  </FormConsumer>
);

export const ButtonList = ({ children }) => (
  <FormConsumer>
    {({ activeStepIndex, totalSteps, onPreviousStep, onNextStep }) =>
      React.Children.map(children, child => {
        if (child.type.name === "Previous") {
          return React.cloneElement(child, {
            isPreviousActive: activeStepIndex > 0,
            goToPreviousStep: () => onPreviousStep()
          });
        } else if (child.type.name === "Next") {
          return React.cloneElement(child, {
            isNextActive: activeStepIndex < totalSteps,
            goToNextStep: () => onNextStep()
          });
        } else if (child.type.name === "Submit") {
          return React.cloneElement(child, {
            isLastStep: activeStepIndex === totalSteps
          });
        }
      })
    }
  </FormConsumer>
);
