import * as React from 'react';
import { observer } from 'mobx-react';
import { Country } from 'components';
import { todoStore } from 'stores';

interface IProps {
  country: string;
}

interface IState {
  name: string;
}

@observer
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
        <p>{todoStore.numberOfTasks}</p>
        <button onClick={() => todoStore.addTodo('yooo')}>Add</button>
        <p>{name}, {country}</p>
      </main>
    );
  }
}
