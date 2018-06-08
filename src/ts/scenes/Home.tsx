import * as React from 'react';
import { Country } from 'components';

interface IProps {
  country: string;
}

interface IState {
  name: string;
}

export class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { name: 'Jonas' };
  }

  render() {
    const { country, name } = {...this.props, ...this.state};

    return (
      <main className="main flex--down">
        <h1>
          Webpack 4 setup by <Country />
        </h1>
        <p>{name}, {country}</p>
      </main>
    );
  }
}
