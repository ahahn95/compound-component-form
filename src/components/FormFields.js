import React from 'react';

export const Name = () => (
  <React.Fragment>
    <span>
      First Name
      <input type="text" name="firstname" />
    </span>
    <span>
      Last Name
      <input type="text" name="lastname" />
    </span>
  </React.Fragment>
);

export const ContactInfo = () => (
  <React.Fragment>
    <span>
      Street
      <input type="text" name="street" />
    </span>
    <span>
      City
      <input type="text" name="city" />
    </span>
    <span>
      State
      <input type="text" name="state" />
    </span>
    <span>
      Zip
      <input type="text" name="zip" />
    </span>
  </React.Fragment>
);

export const EmailInfo = () => (
  <React.Fragment>
    <span>
      Email Address
      <input type="text" name="email" />
    </span>
  </React.Fragment>
);
