import { ClipboardText } from '@phosphor-icons/react';

import styles from './EmptyList.module.css'

export function EmptyList() {
    return (
        <div className={styles.content}>
            <ClipboardText size={56} color='#333333' />
            <span>Você ainda não tem tarefas cadastradas</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}