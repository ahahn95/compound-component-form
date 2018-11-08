import React, { Component, createContext } from 'react';

const FormContext = createContext();

export default class FormWizard extends Component {
  state = { 
    activeStepIndex: 0,
    onPreviousStep: this.onPreviousStep,
    onNextStep: this.onNextStep,
    handleSubmit: this.handelSubmit
  };

  onPreviousStep() 3f{
      this.setState({ activeStepIndex: this.state.activeStepIndex - 1 })
    }

    onNextStep() {
      this.setState({ activeStepIndex: this.state.activeStepIndex + 1 });
    }


  getTotalSteps = children => {
    let totalSteps = 0;
    for (let child of children) {
      if (child.type.name === 'StepList') {
        totalSteps = child.props.children.length - 1;
      }
    }
    this.setState({ totalSteps });
  };

  handleSubmit() {
    alert('Form Submitted!');
  };

  componentDidMount() {
    this.getTotalSteps(this.props.children);
  }

  render() {
    const {children} = this.props;

    return (
    <FormContext.Provider value={this.state}>
      {children}
    </FormContext.Provider>)
  }
}
