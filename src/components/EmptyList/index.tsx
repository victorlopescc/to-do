import { ClipboardText } from '@phosphor-icons/react';

import styles from './EmptyList.module.css'

export function EmptyList() {
    return (
        <div className={styles.container}>
            <ClipboardText size={56} color='#333333' />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}