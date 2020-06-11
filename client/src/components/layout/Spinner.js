import React, { Fragment } from 'react';
import loading from './loading2.gif';

export default () => (
  <Fragment>
    <img className='spinner' src={loading} alt='Loading...' />
  </Fragment>
);
