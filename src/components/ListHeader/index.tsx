import { CompleteCount } from "../CompleteCount";
import { CreateCount } from "../CreateCount";

import styles from './ListHeader.module.css';

export function ListHeader() {
    return (
        <div className={styles.content}>
            <CreateCount />
            <CompleteCount />
        </div>
    )
}