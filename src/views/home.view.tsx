import * as React from 'react';
import { observer } from 'mobx-react';
import { Country } from '../components';
import { todoStore } from '../stores';

interface IProps {
  country: string;
}

interface IState {
  name: string;
}

@observer
export class Home extends React.Component<IProps> {
  state: IState = {
    name: 'Jonas'
  };

  render() {
    const { name } = { ...this.state };

    return (
      <main className="main flex--down">
        <h1>
          Webpack 4 setup by {name} <Country />
        </h1>
        <p>{todoStore.numberOfTasks}</p>
        <button onClick={() => todoStore.addTodo('yooo')}>Add</button>
      </main>
    );
  }
}
