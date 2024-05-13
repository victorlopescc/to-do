import { Count } from '../Count';

import styles from './CreateCount.module.css';

export function CreateCount() {
    return (
        <div className={styles.content}>
            <span>Tarefas criadas</span>
            <Count />
        </div>
    )
}