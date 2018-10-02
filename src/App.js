import React, { Component } from 'react';
import FormWizard from 'components/FormWizard';
import './App.css';
import { Name } from 'components/FormFields';
import { StepList, ButtonList } from 'components/Lists';
import { Step, Previous } from 'components/Step';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FormWizard>
          <StepList>
            <Step render={Name} />
          </StepList>
          <ButtonList>
            <Previous />
          </ButtonList>
        </FormWizard>
      </div>
    );
  }
}
