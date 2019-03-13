import * as React from 'react';
import { render } from 'react-dom';
import { Home } from './views';
import './styles/_all.scss';

render(
  <Home country="Norway" />,
  document.getElementById('app'),
);
