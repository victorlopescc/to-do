import { EmptyList } from "../EmptyList"
import { ListHeader } from "../ListHeader"
import { Task } from "../Task"

import styles from './TaskList.module.css'

export function TaskList() {
    const tasks = ['']

    return (
        <section className={styles.list}>
            {
                tasks.length === 0
                    ? (
                        <div>
                            <ListHeader />
                            <EmptyList />
                        </div>
                    )
                    : (
                        <div>
                            <ListHeader />
                            <Task />
                        </div>
                    )
            }
        </section>
    )
}