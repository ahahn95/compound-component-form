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
