import { Check, Trash } from '@phosphor-icons/react';
import { TaskInterface } from '../../App'

import styles from './Task.module.css'

interface Props {
    data: TaskInterface;
    removeTask: (id: string) => void;
    toggleTask: ({ id, value }: { id: string; value: boolean }) => void;
}

export function Task({ data, removeTask, toggleTask }: Props) {
    function handleTaskToggle() {
        toggleTask({ id: data.id, value: !data.isCompleted })
    }

    function handleTaskRemove() {
        removeTask(data.id)
    }

    const checkboxClass = data.isCompleted
        ? styles['checked']
        : styles['unchecked']

    const descriptionClass = data.isCompleted
        ? styles['completed']
        : ''

    return (
        <div className={styles.container}>
            <div>
                <label htmlFor="checkbox" onClick={handleTaskToggle}>
                    <input readOnly type="checkbox" checked={data.isCompleted} />
                    <span className={`${styles.checkbox}  ${checkboxClass}`}>
                        {data.isCompleted && <Check size={12} />}
                    </span>

                    <p className={`${styles.description} ${descriptionClass}`}>
                        {data.description}
                    </p>
                </label>
            </div>

            <button onClick={handleTaskRemove}>
                <Trash size={16} color="#808080" />
            </button>
        </div>
    )
} 