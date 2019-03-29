import { observer } from 'mobx-react';
import * as React from 'react';
import { Country } from '../../components';
import { todoStore } from '../../stores';
import * as styles from './home.view.scss';

interface IProps {
  country: string;
}

interface IState {
  name: string;
}

@observer
export class Home extends React.Component<IProps> {
  state: IState = {
    name: 'Jonas',
  };

  render(): JSX.Element {
    const { name } = this.state;

    return (
      <main className={`${styles.home} flex--down`}>
        <h1 className={`${styles.home__title} flex`}>
          Webpack 4 setup by {name} <Country />
        </h1>
        <p>{todoStore.numberOfTasks}</p>
        <button onClick={() => todoStore.addTodo('yooo')}>Add</button>
      </main>
    );
  }
}
