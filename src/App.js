import React, { Component } from 'react';
import FormWizard from 'components/FormWizard';
import './App.css';
import { Name, ContactInfo, EmailInfo } from 'components/FormFields';
import { StepList, ButtonList } from 'components/Lists';
import { Step, Previous, Next, Submit } from 'components/Step';

export default class App extends Component {
  state = { test: 1 };

  testUpdateState = () => {
    console.log('hi');
    this.setState({ test: this.state.test + 1 });
  };

  componentWillUnmount() {
    console.log('unmounted');
  }

  render() {
    return (
      <div className="App">
        <FormWizard>
          <StepList>
            <Step render={Name} />
            <Step render={ContactInfo} />
            <Step render={EmailInfo} />
          </StepList>
          <br />
          <ButtonList>
            <Previous />
            <Next />
            <Submit />
          </ButtonList>
        </FormWizard>
        <button onClick={this.testUpdateState}>Test</button>
      </div>
    );
  }
}
