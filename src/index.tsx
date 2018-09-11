import * as React from 'react';
import { render } from 'react-dom';
import { Home } from './ts/views';

render(
  <Home country="Norway" />,
  document.getElementById('app'),
);
