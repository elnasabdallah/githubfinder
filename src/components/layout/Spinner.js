import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <React.Fragment>
    <img
      src={spinner}
      al="Loading..."
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </React.Fragment>
);
export default Spinner;
