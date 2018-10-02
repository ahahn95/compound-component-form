import React, { Component } from 'react';

export default class FormWizard extends Component {
  state = { activeStepIndex: 0 };

  getTotalSteps = children => {
    let totalSteps = 0;
    for (let child of children) {
      if (child.type.name === 'StepList') {
        totalSteps = child.props.children.length - 1;
      }
    }
    this.setState({ totalSteps });
  };

  handleSubmit = () => {
    alert('Form Submitted!');
  };

  componentDidMount() {
    this.getTotalSteps(this.props.children);
  }

  render() {
    const { activeStepIndex, totalSteps } = this.state;
    const children = React.Children.map(this.props.children, child => {
      if (child.type.name === 'StepList') {
        return React.cloneElement(child, {
          activeStepIndex: this.state.activeStepIndex
        });
      } else if (child.type.name === 'ButtonList') {
        return React.cloneElement(child, {
          activeStepIndex,
          totalSteps,
          onPreviousStep: () => {
            this.setState({ activeStepIndex: activeStepIndex - 1 });
          },
          onNextStep: () => {
            this.setState({ activeStepIndex: activeStepIndex + 1 });
          },
          handleSubmit: () => this.handleSubmit()
        });
      } else {
        return child;
      }
    });

    return <form onSubmit={this.handleSubmit}>{children}</form>;
  }
}
