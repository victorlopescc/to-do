import { Count } from '../Count';

import styles from './CompleteCount.module.css';

export function CompleteCount() {
    return (
        <div className={styles.content}>
            <span>Concluídas</span>
            <Count />
        </div>
    )
}