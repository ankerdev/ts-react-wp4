import * as React from 'react';
import * as styles from './home.view.scss';

interface IProps {
  emoji: string;
}

export const Home = ({ emoji }: IProps) => {
  const [count, setCount] = React.useState<number>(1);
  const name: string = 'Jonas';

  React.useEffect(() => {
    setTimeout(() => setCount(count + 1), 1000);
  }, [count]);

  return (
    <main className={`${styles.home} flex--down`}>
      <h1 className={`${styles.title} flex`}>
        Webpack 4 setup by {name} {emoji} {count}
      </h1>
    </main>
  );
};
