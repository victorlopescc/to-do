import styles from './CompleteCount.module.css';

interface Props {
    taskCounter: number;
    completedCounter: number;
}

export function CompleteCount({ taskCounter, completedCounter }: Props) {
    return (
        <aside className={styles.container}>
            <p>Concluídas</p>
            <span>
                {
                    taskCounter === 0
                        ? completedCounter
                        : `${completedCounter} de ${taskCounter}`
                }
            </span>
        </aside>
    )
}