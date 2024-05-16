import { PlusCircle } from '@phosphor-icons/react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { Input } from './components/Input';
import { ButtonCreate } from './components/ButtonCreate';
import { ListHeader } from './components/ListHeader';
import { Task } from './components/Task';
import { EmptyList } from './components/EmptyList';

import styles from './App.module.css'

export interface TaskInterface {
  id: string
  description: string
  isCompleted: boolean
}


export function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([])
  const [input, setInput] = useState('')

  const completedTasks = tasks.reduce((prev, current) => {
    if (current.isCompleted) return prev + 1

    return prev
  }, 0)

  function handleCreate() {
    if (!input) return

    const newTask = {
      id: uuidv4(),
      description: input,
      isCompleted: false
    }

    setTasks((state) => [...state, newTask])
    setInput('')
  }

  function handleRemove(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) return

    setTasks(filteredTasks)
  }

  function handleToggle({ id, value }: { id: string; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, isCompleted: value }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.search}>
          <Input
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <ButtonCreate onClick={handleCreate}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </ButtonCreate>
        </div>

        <div className={styles.tasksList}>
          <ListHeader
            taskCounter={tasks.length}
            completedCounter={completedTasks}
          />

          {
            tasks.length > 0
              ? (
                <div className={styles.task}>
                  {
                    tasks.map((task) => (
                      <Task
                        key={task.id}
                        data={task}
                        removeTask={handleRemove}
                        toggleTask={handleToggle}
                      />
                    ))
                  }
                </div>
              )
              : (
                <EmptyList />
              )
          }
        </div>
      </section>
    </main>
  );
}
