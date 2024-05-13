import { Header } from './components/Header';
import { Input } from './components/Input';

import styles from './App.module.css'

export function App() {
  return (
    <main>
      <Header />

      <section className={styles.search}>
        <Input />
      </section>
    </main>
  );
}
