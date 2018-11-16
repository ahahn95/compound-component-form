import React from "react";
import { FormConsumer } from "./FormWizard";

const createField = (text, name) => (
  <FormConsumer>
    {({ updateFormField }) => (
      <span>
        {text}
        <input type="text" name={name} onChange={e => updateFormField(e)} />
      </span>
    )}
  </FormConsumer>
);

export const Name = () => (
  <>
    {createField("First Name", "firstname")}
    {createField("Last Name", "lastname")}
  </>
);

export const ContactInfo = () => (
  <>
    {createField("Street", "street")}
    {createField("City", "city")}
    {createField("State", "state")}
    {createField("Zip", "zip")}
  </>
);

export const EmailInfo = () => createField("Email Address", "email");
