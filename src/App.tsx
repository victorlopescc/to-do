import { PlusCircle } from '@phosphor-icons/react';

import { Header } from './components/Header';
import { Input } from './components/Input';
import { ButtonCreate } from './components/ButtonCreate';
import { EmptyList } from './components/EmptyList';

import styles from './App.module.css'

export function App() {
  const tasks = []

  return (
    <>
      <Header />

      <main className={styles.content}>
        <form className={styles.search}>
          <Input />
          <ButtonCreate>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight='bold' />
          </ButtonCreate>
        </form>
        <section className={styles.list}>
          {
            tasks.length === 0
              ? (
                <EmptyList />
              )
              : (
                <p>{tasks.length}</p>
              )
          }
        </section>

      </main>
    </>
  );
}
