import * as React from 'react';
import { Link } from 'react-router';

export const NotFound = () => (
  <h2>
    Oooooop! Nothing here :(
    <br/>
    <Link to="/">Go to home page</Link>
  </h2>
);
