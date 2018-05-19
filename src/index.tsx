import * as React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import { Home } from 'Scenes';

const App = hot(module)(Home);

render(
  <Home country="Norway" />,
  document.getElementById('app'),
);
