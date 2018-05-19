import * as React from 'react';
import { Country } from 'Components';

interface Props {
  country: string;
}

interface State {
  name: string;
}

export class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { name: 'Jonas' };
  }

  render() {
    return (
      <main className="main flex--down">
        <h1>
          Webpack 4 setup by <Country />
        </h1>
        <p>{this.state.name}, {this.props.country}</p>
      </main>
    );
  }
}
