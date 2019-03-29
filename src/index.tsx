import * as React from 'react';
import { render } from 'react-dom';
import './styles/_all.scss';
import { Home } from './views';

render(
  <Home country="Norway" />,
  document.getElementById('app'),
);
