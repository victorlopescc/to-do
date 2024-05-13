import { PlusCircle } from '@phosphor-icons/react';

import { Header } from './components/Header';
import { Input } from './components/Input';
import { ButtonCreate } from './components/ButtonCreate';

import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />

      <main className={styles.content}>
        <section className={styles.search}>
          <Input />
          <ButtonCreate>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight='bold' />
          </ButtonCreate>
        </section>

      </main>
    </>
  );
}
