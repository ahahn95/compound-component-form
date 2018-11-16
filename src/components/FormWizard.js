import React, { Component, createContext } from "react";

const FormContext = createContext();

export default class FormWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStepIndex: 0,
      onPreviousStep: this.onPreviousStep,
      onNextStep: this.onNextStep,
      updateFormField: this.updateFormField,
      formData: {
        firstname: "",
        lastname: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        email: ""
      }
    };

    this.onPreviousStep = this.onPreviousStep.bind(this);
    this.onNextStep = this.onNextStep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onPreviousStep = () => {
    this.setState({ activeStepIndex: this.state.activeStepIndex - 1 });
  };

  onNextStep = () => {
    this.setState({ activeStepIndex: this.state.activeStepIndex + 1 });
  };

  getTotalSteps = children => {
    let totalSteps = 0;
    for (let child of children) {
      if (child.type.name === "StepList") {
        totalSteps = child.props.children.length - 1;
      }
    }
    this.setState({ totalSteps });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert("Form Submitted!");
    console.log(this.state.formData);
  };

  updateFormField = event => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    });
  };

  componentDidMount() {
    this.getTotalSteps(this.props.children);
  }

  render() {
    const { children } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormContext.Provider value={this.state}>
          {children}
        </FormContext.Provider>
      </form>
    );
  }
}

export const FormConsumer = FormContext.Consumer;
