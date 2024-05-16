import styles from './Count.module.css'

interface Props {
    taskCounter: number;
}

export function Count({ taskCounter }: Props) {
    return (
        <aside className={styles.container}>
            <p>Tarefas Criadas</p>
            <span>{taskCounter}</span>
        </aside>
    )
}