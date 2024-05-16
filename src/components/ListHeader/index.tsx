import { CompleteCount } from '../CompleteCount';
import { Count } from '../Count';
import styles from './ListHeader.module.css';

interface Props {
    taskCounter: number;
    completedCounter: number;
}

export function ListHeader({ taskCounter, completedCounter }: Props) {
    return (
        <div className={styles.container}>
            <Count taskCounter={taskCounter} />
            <CompleteCount taskCounter={taskCounter} completedCounter={completedCounter} />
        </div>
    )
}